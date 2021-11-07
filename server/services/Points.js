/**
 * BSD 2-Clause License
 * Copyright (c) 2021, HITCON Agent Contributors
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


const {THE_BALANCE_IS_NOT_ENOUGH, THE_CODE_IS_NOT_FOUND, THE_CODE_IS_ALREADY_USED,
  THE_SENDER_DOES_NOT_EXIST, THE_RECEIVER_DOES_NOT_EXIST} = require('../config/error');
/**
 * Create a new Points service.
 * @class
 */
class Points {
  /**
   * @description Create an instance of Points service.
   * @param {Object} db
   */
  constructor(db) {
    // Create instance of Data Access layer using our desired model
    this._db = db;
  }

  /**
   * @description Attempt to subtract points in the user wallet and generate a redeem code.
   * @param {String} uid The user id
   * @param {Number} points The point which is desired to change to redeem code
   * @return {Object}
   */
  async generateCode(uid, points) {
    const transaction = await this._db.sequelize.transaction();
    try {
      const userReturning = await this._db.users.findByPk(uid, {transaction, lock: transaction.LOCK.UPDATE});
      if (userReturning.points < points) throw new Error(THE_BALANCE_IS_NOT_ENOUGH);
      await this._db.users.decrement('points', {by: points, transaction, where: {uid}});
      const result = await this._db.redeem_codes.create(
        {issuer: uid, points},
        {transaction});
      await transaction.commit();
      return result;
    } catch (e) {
      await transaction.rollback();
      throw e;
    }
  }

  /**
   * @description Use the redeem code to get points then deposit points in the user wallet.
   * @param {String} uid The user id
   * @param {String} code The redeem code
   * @return {Object}
   */
  async redeemCode(uid, code) {
    const transaction = await this._db.sequelize.transaction();
    try {
      const codeReturning = await this._db.redeem_codes.findByPk(code, {transaction, lock: transaction.LOCK.UPDATE});
      if (!codeReturning) throw new Error(THE_CODE_IS_NOT_FOUND);
      if (codeReturning.is_used) throw new Error(THE_CODE_IS_ALREADY_USED);
      await this._db.users.increment('points', {by: codeReturning.points, transaction, where: {uid}});
      await this._db.transactions.create({
        sender: codeReturning.issuer,
        receiver: uid,
        points: codeReturning.points,
        type: 'redeem_code'}, {transaction});
      await this._db.redeem_codes.update({is_used: true}, {where: {code}, transaction});
      await transaction.commit();
      return {points: codeReturning.points};
    } catch (e) {
      await transaction.rollback();
      throw e;
    }
  }

  /**
   * @description Attempt to get all self redeem codes using uid.
   * @param {String} uid The user id
   * @return {Object}
   */
  async fetchAllRedeemCode(uid) {
    return this._db.redeem_codes.findAll({
      where: {issuer: uid}
    });
  }

  /**
   * @description Attempt to do a transaction between sender and receiver.
   * @param {String} sender The sender user id
   * @param {String} receiver The receiver user id
   * @param {Number} points The point which is desired to send from sender to receiver
   * @return {Boolean}
   */
  async transactions(sender, receiver, points) {
    const transaction = await this._db.sequelize.transaction();
    try {
      const senderReturning = await this._db.users.findByPk(sender, {transaction, lock: transaction.LOCK.UPDATE});
      if (!senderReturning) throw new Error(THE_SENDER_DOES_NOT_EXIST);
      const receiverReturning = await this._db.users.findByPk(receiver, {transaction, lock: transaction.LOCK.UPDATE});
      if (!receiverReturning) throw new Error(THE_RECEIVER_DOES_NOT_EXIST);
      if (senderReturning.points < points) throw new Error(THE_BALANCE_IS_NOT_ENOUGH);
      await this._db.users.decrement('points', {by: points, transaction, where: {uid: sender}});
      await this._db.users.increment('points', {by: points, transaction, where: {uid: receiver}});
      await this._db.transactions.create({sender, receiver, points, type: 'transactions'}, {transaction});
      await transaction.commit();
      return;
    } catch (e) {
      await transaction.rollback();
      throw e;
    }
  }

  /**
   * @description Attempt to get the user transaction history.
   * @param {String} uid The user id
   * @return {Promise<{success: boolean, error: *}|{success: boolean, data: *}>}
   */
  async transactionsHistory(uid) {
    return this._db.transactions.findAll({
      where: {
        [this._db.Sequelize.Op.or]: [
          {sender: uid},
          {receiver: uid}
        ]
      }
    });
  }
}

module.exports = Points;
// TODO: Fix unit test.

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
    // TODO: Implement generateCode method.
    // users.findByPk(uid)
    // users.decrement('points', {by: points, where: {uid}})
    // redeem_codes.create({issuer: uid, points})
  }

  /**
   * @description Use the redeem code to get points then deposit points in the use wallet.
   * @param {String} uid The user id
   * @param {String} code The redeem code
   * @return {Object}
   */
  async redeemCode(uid, code) {
    // TODO: Implement redeemCode method.
    // redeem_codes.findByPk(code)
    // users.increment('points', {by: points, where: {uid}})
    // redeem_codes.destroy(code)
    // transactions.create({sender: issuer, receiver: uid, points, type: "redeem_code"})
    // * Optimized: Use trigger function: keep_transactions
  }

  /**
   * @description Use the redeem code to get points then deposit points in the use wallet.
   * @param {String} sender The sender user id
   * @param {String} receiver The receiver user id
   * @param {Number} points The point which is desired to send from sender to receiver
   * @return {Boolean}
   */
  async transactions(sender, receiver, points) {
    // TODO: Implement transactions method.
    // users.findByPk(sender)
    // users.decrement('points', {by: points, transaction, where: {uid: sender}})
    // users.increment('points', {by: points, transaction, where: {uid: receiver}});
    // transactions.create({sender, receiver, points, type: "transactions"})
    // * Optimized: Use trigger function: keep_transactions
  }

  /**
   * @description Attempt to get user transaction history.
   * @param {String} uid The user id
   * @return {Promise<{success: boolean, error: *}|{success: boolean, data: *}>}
   */
  async transactionsHistory(uid) {
    // TODO: Implement transactionsHistory method.
    // transactions.findAll()
  }
}

module.exports = Points;

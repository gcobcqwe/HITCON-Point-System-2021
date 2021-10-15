/* eslint-disable max-len */
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

const {THE_BALANCE_IS_NOT_ENOUGH, THE_COUPON_IS_FINISHED} = require('../config/error');
/**
 * Create a new Coupons service.
 * @class
 */
class Coupons {
  /**
   * @description Create an instance of Coupons service.
   * @param {Object} db
   */
  constructor(db) {
    // Create instance of Data Access layer using our desired model
    this._db = db;
  }

  /**
   * @description Attempt to get all self coupons using uid.
   * @param {String} uid The user id
   * @return {Object}
   */
  async findAll(uid) {
    return this._db.coupons.findAll({
      where: {uid},
      attributes: ['id', 'code', 'updated_at'],
      include: {
        model: this._db.coupons_types,
        attributes: ['name'],
        required: false
      }
    });
  }

  /**
   * @description Attempt to cost points for binding a coupons.
   * @param {String} uid The user id
   * @param {String} type The coupon type
   * @return {Object}
   */
  async bind(uid, type) {
    const transaction = await this._db.sequelize.transaction();
    try {
      const couponsTypesReturning = await this._db.coupons_types.findOne({where: {name: type}, transaction});
      const couponsReturning = await this._db.coupons.findOne({where: {type: couponsTypesReturning.id, uid: null}, transaction, lock: transaction.LOCK.UPDATE});
      if (!couponsReturning) throw new Error(THE_COUPON_IS_FINISHED);
      const userReturning = await this._db.users.findByPk(uid, {transaction, lock: transaction.LOCK.UPDATE});
      if (userReturning.points < couponsTypesReturning.points) throw new Error(THE_BALANCE_IS_NOT_ENOUGH);
      await this._db.users.decrement('points', {by: couponsTypesReturning.points, transaction, where: {uid}});
      await this._db.coupons.update({uid, updated_at: Date.now()}, {where: {id: couponsReturning.id}, transaction});
      await transaction.commit();
      return {code: couponsReturning.code};
    } catch (e) {
      await transaction.rollback();
      throw e;
    }
  }
}

module.exports = Coupons;
// TODO: Unit test

/* eslint-disable max-len */
/* eslint-disable camelcase */
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
 * Create a new Invoices service.
 * @class
 */
class Invoices {
  /**
   * @description Create an instance of Invoices service.
   * @param {Object} db
   */
  constructor(db) {
    // Create instance of Data Access layer using our desired model
    this._db = db;
  }

  /**
   * @description Attempt to get all invoices information using uid.
   * @param {String} uid The user id
   * @return {Promise}
   */
  async findAll(uid) {
    return this._db.transactions.findAll({
      where: {
        [this._db.Sequelize.Op.and]: [
          {sender: uid},
          {type: 'shop'}
        ]
      },
      include: [
        {
          model: this._db.invoices,
          attributes: ['p_id', 'quantity'],
          required: false,
          include: [
            {
              model: this._db.products,
              attributes: ['name', 'points'],
              required: false
            }
          ]
        }
      ]
    });
  }

  /**
   * @description Attempt to add an invoice with a transaction.
   * @param {String} uid The user id
   * @param {Array} products The products: [{id: "<product_id>", quantity: <quantity>}]
   * @param {Number} amount The total products amount
   * @return {Promise}
   */
  async add(uid, products, amount) {
    const transaction = await this._db.sequelize.transaction();
    try {
      const userReturning = await this._db.users.findByPk(uid);
      if (userReturning.points < amount) throw new Error('The balance is not enough.');
      await this._db.users.decrement('points', {by: amount, transaction, where: {uid}});
      const transactionReturning = await this._db.transactions.create({sender: uid, receiver: 'SHOP_UID', points: amount, type: 'shop'}, {attributes: ['id']});
      for (const product of products) {
        const p_id = product.id;
        const quantity = product.quantity;
        const productReturning = await this._db.products.findByPk(p_id);
        if (productReturning.quantity < quantity) throw new Error('The product quantity is not enough.');
        await this._db.products.decrement('quantity', {by: quantity, transaction, where: {id: p_id}});
        await this._db.invoices.create({t_id: transactionReturning.id, p_id, quantity});
      }
      await transaction.commit();
      return true;
    } catch (e) {
      await transaction.rollback();
      throw e;
    }
  }
}

module.exports = Invoices;

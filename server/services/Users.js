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

const {THE_USER_IS_NOT_FOUND} = require('../config/error');
/**
 * Create a new Users service.
 * @class
 */
class Users {
  /**
   * @description Create an instance of Users service.
   * @param {Object} db
   */
  constructor(db) {
    // Create instance of Data Access layer using our desired model
    this._db = db;
  }

  /**
   * @description Attempt to get user information using uid.
   * @param {String} uid The user id
   * @return {Promise}
   */
  async find(uid) {
    return this._db.users.findByPk(uid);
  }

  /**
   * @description Attempt to get events using uid.
   * @param {String} uid The user id
   * @return {Promise}
   */
  async events(uid) {
    return this._db.events.findByPk(uid);
  }

  /**
   * @description Attempt to get user one page token using private KKTix code.
   * @param {String} code The private KKTix code
   * @return {Promise}
   */
  async token(code) {
    const usersReturning = await this._db.users.findOne({where: {private_kktix_code: code}, attributes: ['uid']});
    if (!usersReturning) throw new Error(THE_USER_IS_NOT_FOUND);
    return this._db.events.findByPk(usersReturning.uid, {attributes: ['one_page_token']});
  }
}

module.exports = Users;

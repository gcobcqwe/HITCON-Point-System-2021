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
   * @description Attempt to get all users information.
   * @return {Promise}
   */
  async findAll() {
    return this._db.users.findAll();
  }

  /**
   * @description Attempt to add user.
   * @param {String} uid The user id
   * @param {String|null} role The user role
   * @param {Number} points The user points, default: 0
   * @return {Promise}
   */
  async add(uid, role, points=0) {
    return this._db.users.create({uid, role, points});
  }

  /**
   * @description Attempt to update user information.
   * @param {String} uid The user id
   * @param {String} role The user role
   * @param {Number} points The user points
   * @return {Promise}
   */
  async update(uid, role, points) {
    return this._db.users.update({role, points}, {where: {uid}});
  }

  /**
   * @description Attempt to delete user using uid.
   * @param {String} uid The user id
   * @return {Promise}
   */
  async destroy(uid) {
    return this._db.users.destroy({where: {uid}});
  }
}

module.exports = Users;

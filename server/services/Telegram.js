/* eslint-disable no-useless-catch */
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
 * Create a new Telegram service.
 * @class
 */
class Telegram {
  /**
   * @description Create an instance of Telegram service.
   * @param {Cache} codeCache
   * @param {CodeGenerator} codeGenerator
   * @param {Object} db
   */
  constructor(codeCache, codeGenerator, db) {
    this.codeCache = codeCache;
    this.codeGenerator = codeGenerator;
    this.codeGenerator.codeCache = this.codeCache;
    this._db = db;
  }

  /**
   * @description Attempt to use the code to get a specific token and delete the code.
   * @param {String} code The code
   * @return {String|undefined}
   */
  async token(code) {
    try {
      const token = await this.codeCache.get(code);
      await this.codeCache.del(code);
      return token;
    } catch (e) {
      throw e;
    }
  }

  /**
   * @description Attempt to set the token by the code.
   * @param {String} uid The user uid
   * @return {String}
   */
  async generateCode(uid) {
    try {
      const code = await this.codeGenerator.issue();
      const eventsReturning = await this._db.events.findByPk(uid, {attributes: ['point_system_token']});
      const token = eventsReturning.point_system_token;
      await this.codeCache.set(code, token);
      return code;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = Telegram;

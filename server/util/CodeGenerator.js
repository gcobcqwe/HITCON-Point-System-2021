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
const crypto = require('crypto');

/**
 * Create a new CodeGenerator.
 * @class
 */
class CodeGenerator {
  /**
   * @description Create an instance of CodeGenerator.
   */
  constructor() {
    this._codeCache = undefined;
  }

  /**
   * @description Set a codeCache.
   * @param {Cache} cache
   * @set
   */
  set codeCache(cache) {
    this._codeCache = cache;
  }

  /**
   * @description Issue a code.
   * @param {String} key
   * @return {Promise}
   */
  async issue() {
    try {
      if (!this._codeCache) throw new Error('Please set a codeCache!');
      let code;
      do {
        code = this.randomString;
      } while (await this._codeCache.has(code)); // Check if it has a duplicate key.
      return Promise.resolve(code);
    } catch (e) {
      throw e;
    }
  }

  /**
   * @description Random 32 char string. e.g. 6ce709f26bf3d745565024957ea1d003
   * @return {String}
   */
  get randomString() {
    return crypto.randomBytes(16).toString('hex');
  }
}

module.exports = CodeGenerator;

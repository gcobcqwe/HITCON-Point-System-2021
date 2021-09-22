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
 * CodeGenerator generates the temporary authentication code presented on the OnePage interface.
 * When the users clicked on the link with the authentication code, the telegram bot would receive the code
 * and call OnePage's API to exchange the code for a JWT.
 * @class
 */
class CodeGenerator {
  /**
   * @description Create an instance of CodeGenerator.
   */
  constructor() {
    this._counter = 0;
  }

  /**
   * @description Issue a code. To avoid a duplicated code adding a 8 digits number before random 32 chars.
   * @param {String} key
   * @return {Promise}
   */
  async issue() {
    try {
      return Promise.resolve(`${this.series}:${this.randomString}`);
    } catch (e) {
      throw e;
    }
  }

  /**
   * @description Create an eight char series. Maximum: 99999999, e.g. 00000001
   * @return {String}
   */
  get series() {
    if (this._counter > 99999998) this._counter = 0;
    this._counter ++;
    const numberText = this._counter.toString();
    const numberDigits = numberText.length;
    return `${'00000000'.slice(0, 8 - numberDigits)}${numberText}`;
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

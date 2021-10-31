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

const {ReasonPhrases} = require('http-status-codes');
const error = {
  /**
   * @description Attempt to convert error message to BAD_REQUEST, if the message is not in the error object.
   * @param {String} text The error message
   * @return {String}
   */
  msgAdaptor: (text) => {
    if (Object.values(error).includes(text)) {
      return text;
    }
    return ReasonPhrases.BAD_REQUEST;
  },
  THE_BALANCE_IS_NOT_ENOUGH: 'The balance is not enough.',
  THE_COUPON_IS_FINISHED: 'The coupon is finished.',
  THE_REQUEST_PARAMETER_IS_INVALID: 'The request parameter is invalid.',
  THE_CODE_IS_NOT_FOUND: 'The code is not found.',
  THE_CODE_IS_ALREADY_USED: 'The code is already used.',
  THE_SENDER_DOES_NOT_EXIST: 'The sender does not exist.',
  THE_RECEIVER_DOES_NOT_EXIST: 'The receiver does not exist.',
  THE_USER_IS_NOT_FOUND: 'The user is not found.',
  THE_EMAIL_IS_COOL_DOWN: 'The email is cool down.',
  THE_EMAIL_IS_FAILED_DELIVERY: 'The email is failed delivery.'
};

module.exports = error;

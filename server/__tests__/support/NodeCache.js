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
const NodeCache = require('node-cache');

/**
 * A simple caching module that has set, get and delete methods and works a little bit like memcached.
 * Keys can have a timeout (ttl) after which they expire and are deleted from the cache.
 * All keys are stored in a single object so the practical limit is at around 1m keys.
 * @class
 */
class Cache {
  /**
   * @description Create an instance of Cache.
   */
  constructor() {
    this.cache = new NodeCache({stdTTL: 600, checkperiod: 60});
  }

  /**
   * @description Attempt to get value by key.
   * @param {String} key
   * @return {Promise}
   */
  async get(key) {
    return Promise.resolve(this.cache.get(key));
  }

  /**
   * @description Attempt to set value by key.
   * @param {String} key
   * @param {String} value
   * @param {Number} expiredTime Set a timeout(seconds) on key; Default: 600
   * @return {Promise}
   */
  async set(key, value, expiredTime=600) {
    return Promise.resolve(this.cache.set(key, value));
  }

  /**
   * @description Attempt to del value by key.
   * @param {String} key
   * @return {Promise}
   */
  async del(key) {
    return Promise.resolve(this.cache.del(key));
  }
}

module.exports = Cache;

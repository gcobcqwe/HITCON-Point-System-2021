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
const redis = require('redis');
const config = require('../config');
const logger = require('../util/logger');

/**
 * A redis client class that has set, get, delete.
 * @class
 */
class RedisClient {
  /**
   * @description Create an instance of redisClient.
   */
  constructor() {
    this.client = redis.createClient({
      host: config.redis_host,
      port: config.redis_port
    });
    this.client.on('error', function(err) {
      logger.error(`[Redis] could not establish a connection with redis. ${err}`);
    });
    this.client.on('connect', function(_) {
      logger.info(`[Redis] connected to redis successfully`);
    });
  }

  /**
   * @description Attempt to get value by key.
   * @param {String} key
   * @return {Promise}
   */
  async get(key) {
    return new Promise(function(resolve, reject) {
      this.client.get(key, function(err, result) {
        if (err) return reject(err);
        return resolve(result);
      });
    }.bind(this));
  }

  /**
   * @description Attempt to set value by key.
   * @param {String} key
   * @param {String} value
   * @param {Number} expiredTime Set a timeout(seconds) on key; Default: 600
   * @return {Promise}
   */
  async set(key, value, expiredTime=600) {
    return new Promise(function(resolve, reject) {
      this.client.set(key, value, function(err, result) {
        if (err) return reject(err);
        if (expiredTime) this.client.expire(key, expiredTime);
        return resolve(result);
      }.bind(this));
    }.bind(this));
  }

  /**
   * @description Attempt to del value by key.
   * @param {String} key
   * @return {Promise}
   */
  async del(key) {
    return new Promise(function(resolve, reject) {
      this.client.del(key, function(err, result) {
        if (err) return reject(err);
        return resolve(result);
      });
    }.bind(this));
  }
}

module.exports = RedisClient;

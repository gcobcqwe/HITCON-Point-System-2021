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

const cors = require('cors');
const morganBody = require('morgan-body');
const express = require('express');
const config = require('./config');
const api = require('./routes/api');
const {ReasonPhrases, StatusCodes} = require('http-status-codes');
const logger = require('./util/logger');

/**
 * Create a new ExpressLoader.
 * @class
 */
class ExpressLoader {
  /**
   * @description Create an instance of ExpressLoader.
   */
  constructor() {
    this.app = express();
    // Parse body params and attache them to req.body
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json());
    // Set CORS - Cross Origin Resource Sharing
    this.app.use(cors(config.cors_options));
    // HTTP request Log in middleware
    morganBody(this.app, {prettify: false, noColors: true, immediateReqLog: true, logAllReqHeader: true, stream: {
      write: (message) => {
        logger.info(message);
      }
    }});
    // Route api
    this.app.use('/api/v1', api);
    // Handle page NotFound case
    this.app.get('*', (req, res) => {
      res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
    });
    // Error handler
    this.app.use((err, _, res, next) => {
      if (err) {
        console.log(err);
        res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
      } else {
        next();
      }
    });
  }

  /**
   * @get
   */
  get App() {
    return this.app;
  }
}

module.exports = ExpressLoader;

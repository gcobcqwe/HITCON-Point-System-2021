/* eslint-disable max-len */
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
const {StatusCodes} = require('http-status-codes');
const logger = require('../util/logger');
const db = require('../models');
const UsersService = require('../services/Users');
const usersServiceInstance = new UsersService(db);
const {THE_USER_IS_NOT_FOUND, THE_REQUEST_PARAMETER_IS_INVALID, msgAdaptor} = require('../config/error');

/**
 * @description Attempt to get the user information using uid.
 * @param {Request} req
 * @param {Response} res
 */
async function me( req, res ) {
  try {
    const uid = req.token.payload.sub;
    const result = await usersServiceInstance.find(uid);
    if (!result) throw new Error(THE_USER_IS_NOT_FOUND);
    res.status(StatusCodes.OK).send({success: true, data: result});
  } catch (e) {
    logger.error(e);
    res.status(StatusCodes.BAD_REQUEST).send({success: false, message: msgAdaptor(e.message)});
  }
}

/**
 * @description Attempt to get events using uid.
 * @param {Request} req
 * @param {Response} res
 */
async function events( req, res ) {
  try {
    const uid = req.token.payload.sub;
    const result = await usersServiceInstance.events(uid);
    if (!result) throw new Error(THE_USER_IS_NOT_FOUND);
    res.status(StatusCodes.OK).send({success: true, data: result});
  } catch (e) {
    logger.error(e);
    res.status(StatusCodes.BAD_REQUEST).send({success: false, message: msgAdaptor(e.message)});
  }
}

/**
 * @description Attempt to get user one page token using private KKTix code.
 * @param {Request} req
 * @param {Response} res
 */
async function token( req, res ) {
  try {
    const privateKKTixCode = req.body.private_kktix_code;
    if (typeof privateKKTixCode !== 'string') throw new Error(THE_REQUEST_PARAMETER_IS_INVALID);
    const result = await usersServiceInstance.token(privateKKTixCode);
    res.status(StatusCodes.OK).send({success: true, data: result});
  } catch (e) {
    logger.error(e);
    res.status(StatusCodes.BAD_REQUEST).send({success: false, message: msgAdaptor(e.message)});
  }
}

module.exports = {
  me,
  events,
  token
};

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

const config = require('../config');
const jwt = require('jsonwebtoken');
const {ReasonPhrases, StatusCodes} = require('http-status-codes');

/**
 * Verify access token in the middleware.
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const checkAuth = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (!bearerHeader) {
    res.status(StatusCodes.UNAUTHORIZED).send({success: false, message: ReasonPhrases.UNAUTHORIZED});
    return;
  }

  const bearer = bearerHeader.split(' ');
  if (bearer.length === 2 && bearer[0] === 'Bearer') {
    const token = bearer[1];
    jwt.verify(token, config.server_auth_secret, (err, decoded) => {
      if (err) {
        res.status(StatusCodes.FORBIDDEN).send({success: false, message: ReasonPhrases.FORBIDDEN});
      } else {
        if (!decoded.scope.includes('point_system')) {
          res.status(StatusCodes.FORBIDDEN).send({success: false, message: ReasonPhrases.FORBIDDEN});
        }
        req.token = {};
        req.token.payload = decoded;
        next();
      }
    });
  } else {
    res.status(StatusCodes.UNAUTHORIZED).send({success: false, message: ReasonPhrases.UNAUTHORIZED});
  }
};

/**
 * Check the user's role if is it the admin in the middleware.
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const isAdmin = (req, res, next) => {
  if (!req.token.payload.scope.includes('admin')) {
    res.status(StatusCodes.FORBIDDEN).send({success: false, message: ReasonPhrases.FORBIDDEN});
    return;
  }
  next();
};

/**
 * Check the user's role if is it the vendor in the middleware.
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
 const isVendor = (req, res, next) => {
  if (!req.token.payload.scope.includes('vendor')) {
    res.status(StatusCodes.FORBIDDEN).send({success: false, message: ReasonPhrases.FORBIDDEN});
    return;
  }
  next();
};

/**
 * Convert http post body token to http header authorized format.
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const tokenAdapter = (req, res, next) => {
  const token = req.body.token;
  req.headers.authorization = `Bearer ${token}`;
  next();
};

module.exports = {
  checkAuth,
  isAdmin,
  isVendor,
  tokenAdapter
};

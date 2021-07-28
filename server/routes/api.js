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

const express = require('express');
const points = require('./points');
const users = require('./users');
const products = require('./products');
const invoices = require('./invoices');
const telegram = require('./telegram');
const {checkAuth, tokenAdapter} = require('../middlewares/auth');
const config = require('../config');
const router = express.Router();

router.use('/points', checkAuth, points);
router.use('/users', checkAuth, users);
router.use('/products', checkAuth, products);
router.use('/invoices', checkAuth, invoices);
router.use('/tg', telegram);

// Redirect the shop website.
router.post('/redirect-shop-endpoint', tokenAdapter, checkAuth, ( req, res ) => {
  const bearerHeader = req.headers.authorization;
  const token = bearerHeader.split(' ')[1];
  res.cookie(`point_system_token`, token, {path: '/', signed: false, maxAge: config.cookie_max_age, httpOnly: false}); // Turn off httpOnly for client using.
  res.redirect(302, config.web_endpoint);
});

module.exports = router;

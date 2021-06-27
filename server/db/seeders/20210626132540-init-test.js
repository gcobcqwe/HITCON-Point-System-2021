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
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Only for db test
     * Use faked uid, private_kktix_code and role.
     * Use the default secret text to generate JWT(exp: 2524579200).
     */
    await queryInterface.bulkInsert(
      'users',
      [{
        uid: 'eea2faf2ec64ae85df1da5a16348f053',
        role: 'admin',
        points: 100000
      }, {
        uid: 'eea2faf2ec64ae85df1da5a16348f052',
        role: 'vendor',
        points: 100000
      }, {
        uid: 'eea2faf2ec64ae85df1da5a16348f051',
        role: 'client',
        points: 100000
      }]);
    await queryInterface.bulkInsert(
      'events',
      [{
        uid: 'eea2faf2ec64ae85df1da5a16348f053',
        private_kktix_code: '1qnv3KIdgGcTaHXfHtPJda9kDZ5uwqFUT6voH',
        one_page_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2hpdGNvbi5vcmciLCJzdWIiOiJlZWEyZmFmMmVjNjRhZTg1ZGYxZGE1YTE2MzQ4ZjA1MyIsImlhdCI6MTYyNDcxNTc3NSwiZXhwIjoyNTI0NTc5MjAwLCJzY29wZSI6Im9uZV9wYWdlIn0.fuIfk_zrVhJcmmC28GIBwDq6bOxQdyteHEvuKDJq1_Q',
        kof_server_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2hpdGNvbi5vcmciLCJzdWIiOiJlZWEyZmFmMmVjNjRhZTg1ZGYxZGE1YTE2MzQ4ZjA1MyIsImlhdCI6MTYyNDcxNTc3NSwiZXhwIjoyNTI0NTc5MjAwLCJzY29wZSI6ImtvZl9zZXJ2ZXIifQ.zsuoU8PZjpLETEkPsbS_5zb1UpWa0LE1yMTsIIaylCs',
        online_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2hpdGNvbi5vcmciLCJzdWIiOiJlZWEyZmFmMmVjNjRhZTg1ZGYxZGE1YTE2MzQ4ZjA1MyIsImlhdCI6MTYyNDcxNTc3NSwiZXhwIjoyNTI0NTc5MjAwLCJzY29wZSI6Im9ubGluZSJ9.4nJW7SpLGoeMMn7-sxy3e7reIUIfGskhj4OR3R6b8Fw',
        point_system_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2hpdGNvbi5vcmciLCJzdWIiOiJlZWEyZmFmMmVjNjRhZTg1ZGYxZGE1YTE2MzQ4ZjA1MyIsImlhdCI6MTYyNDcxNTc3NSwiZXhwIjoyNTI0NTc5MjAwLCJzY29wZSI6InBvaW50X3N5c3RlbSBjbGllbnQifQ.Fz-wiV1z6VVbeUypanAVugS9adTFJIB6Fy8z7afC-6s',
        streaming_link: 'https://hitcon.org/2021/'
      }, {
        uid: 'eea2faf2ec64ae85df1da5a16348f052',
        private_kktix_code: '2lnv3OKdgGcaLHLfHtPJda8kDZ5uwqCCT3vuu',
        one_page_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2hpdGNvbi5vcmciLCJzdWIiOiJlZWEyZmFmMmVjNjRhZTg1ZGYxZGE1YTE2MzQ4ZjA1MiIsImlhdCI6MTYyNDcxNTcxNiwiZXhwIjoyNTI0NTc5MjAwLCJzY29wZSI6Im9uZV9wYWdlIn0.CYQQH2IvFScxJ6z47A1KUdWhhHc55AkNv3IjSKKEpCw',
        kof_server_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2hpdGNvbi5vcmciLCJzdWIiOiJlZWEyZmFmMmVjNjRhZTg1ZGYxZGE1YTE2MzQ4ZjA1MiIsImlhdCI6MTYyNDcxNTcxNiwiZXhwIjoyNTI0NTc5MjAwLCJzY29wZSI6ImtvZl9zZXJ2ZXIifQ.L3oUIJ3Hvtk3aUnPtldAs1di_6QwK57_pXuv-PwF3og',
        online_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2hpdGNvbi5vcmciLCJzdWIiOiJlZWEyZmFmMmVjNjRhZTg1ZGYxZGE1YTE2MzQ4ZjA1MiIsImlhdCI6MTYyNDcxNTcxNiwiZXhwIjoyNTI0NTc5MjAwLCJzY29wZSI6Im9ubGluZSJ9.pW8cxXbLi25iwV136aeg_M2GMHIiyTjb5uShFTJ80Us',
        point_system_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2hpdGNvbi5vcmciLCJzdWIiOiJlZWEyZmFmMmVjNjRhZTg1ZGYxZGE1YTE2MzQ4ZjA1MiIsImlhdCI6MTYyNDcxNTcxNiwiZXhwIjoyNTI0NTc5MjAwLCJzY29wZSI6InBvaW50X3N5c3RlbSBjbGllbnQifQ.sj6z82RwONZOVGC98a5NAdPz0KqgIpZiavpbJD6AUOg',
        streaming_link: 'https://hitcon.org/2021/'
      }, {
        uid: 'eea2faf2ec64ae85df1da5a16348f051',
        private_kktix_code: '6lev45OKdgGcaPSODdtP1da8kDZ5uwqCCT4vfy3',
        one_page_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2hpdGNvbi5vcmciLCJzdWIiOiJlZWEyZmFmMmVjNjRhZTg1ZGYxZGE1YTE2MzQ4ZjA1MSIsImlhdCI6MTYyNDcxNTYwNiwiZXhwIjoyNTI0NTc5MjAwLCJzY29wZSI6Im9uZV9wYWdlIn0.IrzesyXxmKjVuymKUDWoSFMTTgjPP_EGrmRTgITLwks',
        kof_server_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2hpdGNvbi5vcmciLCJzdWIiOiJlZWEyZmFmMmVjNjRhZTg1ZGYxZGE1YTE2MzQ4ZjA1MSIsImlhdCI6MTYyNDcxNTYwNiwiZXhwIjoyNTI0NTc5MjAwLCJzY29wZSI6ImtvZl9zZXJ2ZXIifQ.WeNjIH0BlUQcY-KyNARJdvFgseXwgFvXzreY_kY58-0',
        online_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2hpdGNvbi5vcmciLCJzdWIiOiJlZWEyZmFmMmVjNjRhZTg1ZGYxZGE1YTE2MzQ4ZjA1MSIsImlhdCI6MTYyNDcxNTYwNiwiZXhwIjoyNTI0NTc5MjAwLCJzY29wZSI6Im9ubGluZSJ9.b3EjLSSe3n77H8_GUIDlN4WJZ985tcIvEvLRbEScges',
        point_system_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2hpdGNvbi5vcmciLCJzdWIiOiJlZWEyZmFmMmVjNjRhZTg1ZGYxZGE1YTE2MzQ4ZjA1MSIsImlhdCI6MTYyNDcxNTYwNiwiZXhwIjoyNTI0NTc5MjAwLCJzY29wZSI6InBvaW50X3N5c3RlbSBjbGllbnQifQ.eyZ0b3-_QRbUKOoMt80UnHvjrZNujLcbEnlAU5GFtDw',
        streaming_link: 'https://hitcon.org/2021/'
      }]);
    await queryInterface.bulkInsert(
      'transactions',
      [{
        sender: 'eea2faf2ec64ae85df1da5a16348f053',
        receiver: 'eea2faf2ec64ae85df1da5a16348f052',
        points: 200,
        type: 'transactions'
      }, {
        sender: 'eea2faf2ec64ae85df1da5a16348f053',
        receiver: 'eea2faf2ec64ae85df1da5a16348f051',
        points: 100,
        type: 'redeem_code'
      }, {
        sender: 'eea2faf2ec64ae85df1da5a16348f052',
        receiver: 'eea2faf2ec64ae85df1da5a16348f053',
        points: 100,
        type: 'redeem_code'
      }]);
    await queryInterface.bulkInsert(
      'redeem_codes',
      [{
        code: 'dc83b5eb-24b5-4a83-ba76-7758529b59a3',
        issuer: 'eea2faf2ec64ae85df1da5a16348f052',
        points: 100
      }]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('events', null, {});
    await queryInterface.bulkDelete('transactions', null, {});
    await queryInterface.bulkDelete('redeem_codes', null, {});
  }
};

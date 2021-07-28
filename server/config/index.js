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

const config = {
  web_endpoint: process.env.WEB_ENDPOINT,
  server_port: process.env.SERVER_PORT || 4000,
  cors_options: {
    credentials: true,
    origin: process.env.WEB_ENDPOINT,
    optionsSuccessStatus: 200
  },
  server_auth_secret: process.env.SERVER_AUTH_SECRET || 'server_auth_secret',
  cookie_secret: process.env.COOKIE_SECRET || 'cookie_secret',
  cookie_max_age: 86400 * 1000 * 30 * 2,
  cookie_secure: false,
  [`database-${process.env.ENV}`]: {
    migrationStorageTableName: 'sequelize_meta',
    username: process.env.DATABASE_USERNAME || 'database_username',
    password: process.env.DATABASE_PASSWORD || 'database_password',
    database: process.env.DATABASE_NAME || 'postgres',
    host: process.env.DATABASE_HOST || '127.0.0.1',
    dialect: 'postgres',
    logging: process.env.ENV === 'prod'? true: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30 * 1000,
      idle: 10 * 1000
    },
    define: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
};

module.exports = config;

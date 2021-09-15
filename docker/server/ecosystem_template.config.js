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

module.exports = {
  apps: [
    {
      name: 'point-system',
      script: '/app/server.js',
      exec_mode: 'cluster',
      instances: 2,
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      error_file: '/var/log/point_system/error.log',
      out_file: '/var/log/point_system/out.log',
      pid_file: '/app/.pm2/pid/.pid',
      merge_logs: true,
      env: {
        ENV: '<ENV>',
        SERVER_PORT: '<SERVER_PORT>',
        WEB_ENDPOINT: '<WEB_ENDPOINT>',
        SERVER_AUTH_SECRET: '<SERVER_AUTH_SECRET>',
        COOKIE_SECRET: '<COOKIE_SECRET>',
        DATABASE_USERNAME: '<DATABASE_USERNAME>',
        DATABASE_PASSWORD: '<DATABASE_PASSWORD>',
        DATABASE_NAME: '<DATABASE_NAME>',
        DATABASE_HOST: '<DATABASE_HOST>'
      },
      env_local: {
        ENV: 'dev',
        SERVER_PORT: 4000,
        WEB_ENDPOINT: 'http://localhost:5000',
        SERVER_AUTH_SECRET: 'server_auth_secret',
        COOKIE_SECRET: 'cookie_secret',
        DATABASE_USERNAME: 'postgres',
        DATABASE_PASSWORD: 'p@sshitcon2021',
        DATABASE_NAME: 'postgres',
        DATABASE_HOST: '127.0.0.1'
      }
    }
  ]
};

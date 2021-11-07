#!/bin/sh
# BSD 2-Clause License
# Copyright (c) 2021, HITCON Agent Contributors
# All rights reserved.
# Redistribution and use in source and binary forms, with or without
# modification, are permitted provided that the following conditions are met:
# 1. Redistributions of source code must retain the above copyright notice, this
# list of conditions and the following disclaimer.
# 2. Redistributions in binary form must reproduce the above copyright notice,
# this list of conditions and the following disclaimer in the documentation
# and/or other materials provided with the distribution.
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
# AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
# IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
# DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
# FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
# DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
# SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
# CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
# OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
# OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
set -e

# Pm2 config init
if [[ ! -z "$ENV" ]]; then
  sed -i 's/<ENV>/'"$ENV"'/' /etc/pm2/ecosystem.config.js
fi

if [[ ! -z "$SERVER_PORT" ]]; then
  sed -i 's/<SERVER_PORT>/'"$SERVER_PORT"'/' /etc/pm2/ecosystem.config.js
fi

if [[ ! -z "$WEB_ENDPOINT" ]]; then
  sed -i 's,<WEB_ENDPOINT>,'"$WEB_ENDPOINT"',' /etc/pm2/ecosystem.config.js
fi

if [[ ! -z "$SERVER_AUTH_SECRET" ]]; then
  sed -i 's/<SERVER_AUTH_SECRET>/'"$SERVER_AUTH_SECRET"'/' /etc/pm2/ecosystem.config.js
fi

if [[ ! -z "$COOKIE_SECRET" ]]; then
  sed -i 's/<COOKIE_SECRET>/'"$COOKIE_SECRET"'/' /etc/pm2/ecosystem.config.js
fi

if [[ ! -z "$DATABASE_USERNAME" ]]; then
  sed -i 's/<DATABASE_USERNAME>/'"$DATABASE_USERNAME"'/' /etc/pm2/ecosystem.config.js
fi

if [[ ! -z "$DATABASE_PASSWORD" ]]; then
  sed -i 's/<DATABASE_PASSWORD>/'"$DATABASE_PASSWORD"'/' /etc/pm2/ecosystem.config.js
fi

if [[ ! -z "$DATABASE_NAME" ]]; then
  sed -i 's/<DATABASE_NAME>/'"$DATABASE_NAME"'/' /etc/pm2/ecosystem.config.js
fi

if [[ ! -z "$DATABASE_HOST" ]]; then
  sed -i 's,<DATABASE_HOST>,'"$DATABASE_HOST"',' /etc/pm2/ecosystem.config.js
fi

if [[ ! -z "$REDIS_HOST" ]]; then
  sed -i 's/<REDIS_HOST>/'"$REDIS_HOST"'/' /etc/pm2/ecosystem.config.js
fi

if [[ ! -z "$REDIS_PORT" ]]; then
  sed -i 's,<REDIS_PORT>,'"$REDIS_PORT"',' /etc/pm2/ecosystem.config.js
fi

if [[ ! -z "$MAILCHIMP_API_KEY" ]]; then
  sed -i 's/<MAILCHIMP_API_KEY>/'"$MAILCHIMP_API_KEY"'/' /etc/pm2/ecosystem.config.js
fi

if [[ ! -z "$MAILCHIMP_TEMPLATE_NAME" ]]; then
  sed -i 's,<MAILCHIMP_TEMPLATE_NAME>,'"$MAILCHIMP_TEMPLATE_NAME"',' /etc/pm2/ecosystem.config.js
fi

if [[ ! -z "$EMAIL_SUBJECT" ]]; then
  sed -i 's,<EMAIL_SUBJECT>,'"$EMAIL_SUBJECT"',' /etc/pm2/ecosystem.config.js
fi

if [[ ! -z "$EMAIL_FROM" ]]; then
  sed -i 's/<EMAIL_FROM>/'"$EMAIL_FROM"'/' /etc/pm2/ecosystem.config.js
fi

if [[ ! -z "$EMAIL_NAME_FROM" ]]; then
  sed -i 's,<EMAIL_NAME_FROM>,'"$EMAIL_NAME_FROM"',' /etc/pm2/ecosystem.config.js
fi

if [[ ! -z "$SERVER_PORT" ]]; then
  sed -i 's/<SERVER_PORT>/'"$SERVER_PORT"'/' /app/healthcheck.sh
fi

# Run db init
cd /app
npx sequelize-cli db:migrate --env database-$ENV
npx sequelize-cli db:seed --seed 20210720164302-init --env database-$ENV

exec $(eval "echo $@")

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

# Alpine image
FROM mhart/alpine-node:14

# Create folders
RUN mkdir /var/log/point_system && \
  mkdir /app && \
  mkdir /app/.pm2 && \
  mkdir /app/.pm2/pid && \
  mkdir /etc/pm2

# Copy file to docker image
COPY server/ /app
COPY docker/server/ecosystem_template.config.js /etc/pm2/ecosystem.config.js
COPY docker/server/healthcheck.sh /app
COPY docker/server/docker-entrypoint.sh /usr/local/bin/

# Add curl
RUN apk --no-cache add curl

WORKDIR /app

# Grant file executable permission
RUN chmod +x /usr/local/bin/docker-entrypoint.sh &&  \
    chmod +x /app/healthcheck.sh

# NPM install
RUN npm install --only=prod
RUN npm install pm2 -g

ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 4000 4000

CMD ["pm2-runtime", "start", "/etc/pm2/ecosystem.config.js"]

# Local mode
# CMD ["pm2-runtime", "start", "/etc/pm2/ecosystem.config.js", "--env=local"]

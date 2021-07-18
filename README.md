# HITCON-Point-System-2021

```js
HITCON-Point-System-2021
```


## Usage

```
# Database
$ docker run -d --name HITCON_SHOP -p 5432:5432 -e 'POSTGRES_PASSWORD=<POSTGRES_PASSWORD>' postgres 

# Server
## Install dependencies
$ npm install

# .env
export SERVER_PORT=4000
export WEB_ENDPOINT='http://localhost:5000'
export SERVER_AUTH_SECRET=<SERVER_AUTH_SECRET>
export COOKIE_SECRET=<COOKIE_SECRET>
export DATABASE_USERNAME=postgres
export DATABASE_PASSWORD=<DATABASE_PASSWORD>
export DATABASE_NAME=<DATABASE_NAME>
export DATABASE_HOST=127.0.0.1
export ENV=dev

## Run sequelize-cli
$ npx sequelize-cli db:migrate --env database-dev

## Run sequelize-cli db:seed
$ npx sequelize-cli db:seed --seed 20210626132540-init-test --env database-dev

## Run server
$ node server.js

# Web
## Install dependencies
$ npm install

## Compiles and hot-reloads for development
$ npm run dev

```
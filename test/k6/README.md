# Running k6 Loading Tests

## Prerequisites
---
1. Follow the [instructions](https://k6.io/docs/getting-started/installation/) to install k6 ( Version > 0.30.0 ).
2. Insert dummy seeds.
3. Make sure the access token verification using the signing server_auth_secret.

```
$ cd {workdir}/server
$ npm install
$ npx sequelize-cli db:migrate --env database-${ENV}
$ npx sequelize-cli db:seed --seed ./db/seeders/20210626132540-init-test.js --env database-${ENV}
$ npx sequelize-cli db:seed --seed ./db/seeders/20211025090506-coupons-test.js --env database-${ENV}
```

## Run
---
### Users API Loading Test

```
$ k6 run users.js
```

### Events API Loading Test

```
$ k6 run events.js
```

### Transaction API Loading Test

```
$ k6 run transactions.js
```

### Coupons API Loading Test

```
$ k6 run coupons.js
```

## Race Condition Test

### Coupons
---

```
$ k6 run coupons.js
```

| Name | Description |
|--|--|
| COUPON_POINTS | The coupon's points. |
| TOTAL_POINTS | The total points in coupons = ( iterations * <COUPON_POINTS\> ) |
| USER_POINTS_PRE | The user previous points before getting coupons. |
| USER_POINTS | The user current points. |

Verify:
1. USER_POINTS = USER_POINTS_PRE - TOTAL_POINTS.
2. The iterations are the same as the number of coupons which has uid in the coupons table.
    ```
    e.g.
    SELECT COUNT(*) FROM coupons WHERE uid IS NOT NULL;
    ```

### Transactions
---

```
$ k6 run transactions.js
```

| Name | Description |
|--|--|
| POINTS | The points in a transaction. |
| TOTAL_POINTS | The total points in transactions = ( iterations * <POINTS\> ) |
| SENDER_POINTS_PRE | The sender previous points before running transactions. |
| SENDER_POINTS | The sender current points. |
| RECEIVER_POINTS_PRE | The receiver previous points before running transactions. |
| RECEIVER_POINTS | The receiver current points. |

Verify:
1. SENDER_POINTS = SENDER_POINTS_PRE - TOTAL_POINTS.
2. RECEIVER_POINTS = RECEIVER_POINTS_PRE + TOTAL_POINTS.
3. The records are in the transactions table.

## License
---
```
BSD 2-Clause License
Copyright (c) 2021, HITCON Agent Contributors
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
this list of conditions and the following disclaimer in the documentation
and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```

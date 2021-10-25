# Tool
### Sync Users Data From The Google Sheet
---
This service is for non-stopping fetching the latest users data from the google sheet. We need to set up cron job and run this service in the background.

Environment:
1. Install Node version > 12.
2. Install git.
3. Install psql.

Prerequisite:
1. [Prepare your own credential.](https://robocorp.com/docs/development-guide/google-sheets/interacting-with-google-sheets)
2. Set .env file.
3. Set cron job (* * * * *) for running service every minute.

Workflow:
1. Fetch users data from the google sheet and write the one page token to the google sheet.
2. Git diff.
3. Parse data to SQL and run psql (Optional: Only data change).
4. git add and commit <UNIX_TIMESTAMP> (Optional: Only data change).

Run:
```
$ sh sync_ad.sh
```

### Generate JWT
---
```
$ sh jwt_generator.sh <UID> <SCOPE>
```

### Generate UID
---
```
$ sh jwt_generator.sh <KKTIX_PRIVATE_CODE>
```

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

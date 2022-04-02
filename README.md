# HITCON-Point-System-2021
---
![](https://github.com/gcobcqwe/HITCON-Point-System-2021/blob/master/documents/web_ui.png)

## Objective
---
### Events
---
Join the online event through the HITCON 2021 One Page. The events include HITCON Online, Hacker Cat Adventure, Malware Playground, and Operation : Hacker Cat. You must use your personal link to access those activities.

### Agenda
---
Watch the HITCON 2021 agenda and live streaming through the HITCON 2021 One Page. The link of live streaming is an exclusive link, please don’t share the link with others. If we find suspicious multi-access behavior, we will block your link.

### Earn the points and exchange the souvenir
---
You can click the menu button on the right of the nickname to accumulate and redeem the limited souvenirs or HITCON discount coupons. Participate in the events. Visit the sponsors and community booths. By accumulating points, you can redeem the discount coupons of HITCON Official Store and the HITCON limited souvenirs. You can also exchange your points with other attendees. Please note that there are only a limited number of souvenirs and discount coupons available for redemption.

## Instruction
---
See Instruction [here](https://github.com/gcobcqwe/HITCON-Point-System-2021/blob/master/documents/HITCON%202021%20One%20Page%20%E9%BB%9E%E6%95%B8%E7%B3%BB%E7%B5%B1%E6%93%8D%E4%BD%9C%E6%8C%87%E5%8D%97%20Point%20System%20Instructions.pdf )

## Documents
---
See Prerequisite SPEC [here](https://github.com/gcobcqwe/HITCON-Point-System-2021/blob/master/documents/HITCON%202021%20Email%20Prerequisite%20%E8%A8%AD%E8%A8%88%E6%96%87%E4%BB%B6.pdf)
</br>
See System SPEC [here](https://github.com/gcobcqwe/HITCON-Point-System-2021/blob/master/documents/HITCON%202021%20%E9%BB%9E%E6%95%B8%E7%B3%BB%E7%B5%B1%20%E8%A8%AD%E8%A8%88%E6%96%87%E4%BB%B6.pdf)

## Deployment
---

### Prerequisite
- Install Docker version > 1.13.0+. (Highly Recommend: Docker: 19.03.0+ and Docker-compose: 1.29.2)
- Prepare 80 and 443 port for Nginx.
- Prepare 5432 for Postgresql (Optional).
- Use the correct postgresql and server`.env` in the staging.

### Command
Up:
`docker-compose -f docker/docker-compose.yml up --build --detach`
- If images already exist:
`docker-compose -f docker/docker-compose.yml up --detach`

Down:
`docker-compose -f docker/docker-compose.yml down`

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

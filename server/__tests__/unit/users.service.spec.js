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
/* eslint-disable no-undef */
const dbMock = require('../support/dbMock');
const UsersService = require('../../services/Users');
const UsersServiceInstance = new UsersService(dbMock);

describe('[Test] Users Service', () => {
  it('Create instance of service', async () => {
    expect(UsersServiceInstance).toBeInstanceOf(UsersService);
  });
  it('Exposes the find method', async () => {
    expect(UsersServiceInstance.find).toBeDefined();
  });
  it('Exposes the findAll method', async () => {
    expect(UsersServiceInstance.findAll).toBeDefined();
  });
  it('Exposes the add method', async () => {
    expect(UsersServiceInstance.add).toBeDefined();
  });
  it('Exposes the update method', async () => {
    expect(UsersServiceInstance.update).toBeDefined();
  });
  it('Exposes the destroy method', async () => {
    expect(UsersServiceInstance.destroy).toBeDefined();
  });
});

describe('[Test] find method', () => {
  it('Success', async () => {
    const result = await UsersServiceInstance.find('eea2faf2ec64ae85df1da5a16348f051');
    expect(result).toMatchObject({
      uid: 'eea2faf2ec64ae85df1da5a16348f051',
      private_kktix_code: '6lev45OKdgGcaPSODdtP1da8kDZ5uwqCCT4vfy3',
      nickname: 'test',
      role: 'client',
      points: 100
    });
  });
});

describe('[Test] findAll method', () => {
  it('Success', async () => {
    const result = await UsersServiceInstance.findAll();
    expect(result).toMatchObject([{
      uid: 'eea2faf2ec64ae85df1da5a16348f051',
      private_kktix_code: '6lev45OKdgGcaPSODdtP1da8kDZ5uwqCCT4vfy3',
      nickname: 'test',
      role: 'client',
      points: 100
    }, {
      uid: 'eea2faf2ec64ae85df1da5a16348f052',
      private_kktix_code: '2lnv3OKdgGcaLHLfHtPJda8kDZ5uwqCCT3vuu',
      nickname: 'test2',
      role: 'vendor',
      points: 200
    }]);
  });
});

describe('[Test] add method', () => {
  it('Success', async () => {
    const result = await UsersServiceInstance.add('eea2faf2ec64ae85df1da5a16348f051', 'client', 100);
    expect(result).toMatchObject({
      uid: 'eea2faf2ec64ae85df1da5a16348f051',
      private_kktix_code: '6lev45OKdgGcaPSODdtP1da8kDZ5uwqCCT4vfy3',
      nickname: 'test',
      role: 'client',
      points: 100
    });
  });
});

describe('[Test] update method', () => {
  it('Success', async () => {
    const result = await UsersServiceInstance.update('eea2faf2ec64ae85df1da5a16348f051', null, 150);
    expect(result).toMatchObject({
      uid: 'eea2faf2ec64ae85df1da5a16348f051',
      private_kktix_code: '6lev45OKdgGcaPSODdtP1da8kDZ5uwqCCT4vfy3',
      nickname: 'test',
      role: 'client',
      points: 150
    });
  });
});

describe('[Test] destroy method', () => {
  it('Success', async () => {
    const result = await UsersServiceInstance.destroy('eea2faf2ec64ae85df1da5a16348f051');
    expect(result).toEqual(true);
  });
});

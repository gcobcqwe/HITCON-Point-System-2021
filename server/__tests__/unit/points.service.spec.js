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
/* eslint-disable max-len */
const dbMock = require('../support/dbMock');
const PointsService = require('../../services/Points');
const PointsServiceInstance = new PointsService(dbMock);

describe('[Test] Point Service', () => {
  it('Create instance of service', () => {
    expect(PointsServiceInstance).toBeInstanceOf(PointsService);
  });
  it('Exposes the generateCode method', () => {
    expect(PointsServiceInstance.generateCode).toBeDefined();
  });
  it('Exposes the redeemCode method', () => {
    expect(PointsServiceInstance.redeemCode).toBeDefined();
  });
  it('Exposes the fetchAllRedeemCode method', () => {
    expect(PointsServiceInstance.fetchAllRedeemCode).toBeDefined();
  });
  it('Exposes the transactions method', () => {
    expect(PointsServiceInstance.transactions).toBeDefined();
  });
  it('Exposes the transactionsHistory method', () => {
    expect(PointsServiceInstance.transactionsHistory).toBeDefined();
  });
});

describe('[Test] generateCode method', () => {
  it('Success', async () => {
    const result = await PointsServiceInstance.generateCode('eea2faf2ec64ae85df1da5a16348f051', 99);
    expect(result).toMatchObject({
      code: '4c1af499-e472-487e-be59-a1adda9a0d07',
      issuer: 'eea2faf2ec64ae85df1da5a16348f051',
      points: 100,
      is_used: false,
      created_at: '2021-06-26 14:19:21.849228+00'
    });
  });

  it('The balance is not enough.', async () => {
    try {
      await PointsServiceInstance.generateCode('eea2faf2ec64ae85df1da5a16348f051', 101);
    } catch (e) {
      expect(e).toEqual(new Error('The balance is not enough.'));
    }
  });
});

describe('[Test] redeemCode method', () => {
  it('Success', async () => {
    const result = await PointsServiceInstance.redeemCode('eea2faf2ec64ae85df1da5a16348f051', '4c1af499-e472-487e-be59-a1adda9a0d07');
    expect(result).toMatchObject({
      points: 100
    });
  });

  it('The code is is not found.', async () => {
    try {
      await PointsServiceInstance.redeemCode('eea2faf2ec64ae85df1da5a16348f051', '4c1af499-e472-487e-be59-a1adda9a0d06');
    } catch (e) {
      expect(e).toEqual(new Error('The code is not found.'));
    }
  });
});

describe('[Test] fetchAllRedeemCode method', () => {
  it('Success', async () => {
    const result = await PointsServiceInstance.fetchAllRedeemCode('eea2faf2ec64ae85df1da5a16348f051');
    expect(result).toMatchObject([{
      code: '4c1af499-e472-487e-be59-a1adda9a0d07',
      issuer: 'eea2faf2ec64ae85df1da5a16348f051',
      points: 100,
      is_used: false,
      created_at: '2021-06-26 14:19:21.849228+00'
    }]);
  });
});

describe('[Test] transactions method', () => {
  it('Success', async () => {
    const result = await PointsServiceInstance.transactions('eea2faf2ec64ae85df1da5a16348f051', 'eea2faf2ec64ae85df1da5a16348f052', 99);
    expect(result).toEqual(true);
  });

  it('The balance is not enough.', async () => {
    try {
      await PointsServiceInstance.generateCode('eea2faf2ec64ae85df1da5a16348f051', 101);
    } catch (e) {
      expect(e).toEqual(new Error('The balance is not enough.'));
    }
  });
});

describe('[Test] transactionsHistory method', () => {
  it('Success', async () => {
    const result = await PointsServiceInstance.transactionsHistory('eea2faf2ec64ae85df1da5a16348f051');
    expect(result).toMatchObject([
      {
        id: 2,
        sender: 'eea2faf2ec64ae85df1da5a16348f051',
        receiver: 'eea2faf2ec64ae85df1da5a16348f052',
        type: 'redeem_code',
        points: 30,
        created_at: '2021-06-26 14:19:21.849228+00'
      },
      {
        id: 1,
        sender: 'eea2faf2ec64ae85df1da5a16348f052',
        receiver: 'eea2faf2ec64ae85df1da5a16348f051',
        type: 'transactions',
        points: 20,
        created_at: '2021-06-26 13:19:21.849228+00'
      }
    ]);
  });
});

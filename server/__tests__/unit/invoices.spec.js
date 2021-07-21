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
const InvoicesService = require('../../services/Invoices');
const invoicesServiceInstance = new InvoicesService(dbMock);

describe('[Test] Products Service', () => {
  it('Create instance of service', async () => {
    expect(invoicesServiceInstance).toBeInstanceOf(InvoicesService);
  });
  it('Exposes the findAll method', async () => {
    expect(invoicesServiceInstance.findAll).toBeDefined();
  });
  it('Exposes the add method', async () => {
    expect(invoicesServiceInstance.add).toBeDefined();
  });
});

describe('[Test] findAll method', () => {
  beforeAll(() => {
    dbMock.transactions = {
      findAll() {
        return Promise.resolve([
          {
            'id': 1,
            'sender': 'eea2faf2ec64ae85df1da5a16348f053',
            'receiver': 'SHOP_UID',
            'type': 'shop',
            'points': 800,
            'created_at': '2021-07-20T17:39:09.611Z',
            'invoices': [
              {
                'p_id': 1,
                'quantity': 2,
                'product': {
                  'name': 'product_1',
                  'points': 100
                }
              },
              {
                'p_id': 2,
                'quantity': 3,
                'product': {
                  'name': 'product_2',
                  'points': 200
                }
              }
            ]
          }
        ]);
      }};
  });

  it('Success', async () => {
    const result = await invoicesServiceInstance.findAll();
    expect(result).toMatchObject([
      {
        'id': 1,
        'sender': 'eea2faf2ec64ae85df1da5a16348f053',
        'receiver': 'SHOP_UID',
        'type': 'shop',
        'points': 800,
        'created_at': '2021-07-20T17:39:09.611Z',
        'invoices': [
          {
            'p_id': 1,
            'quantity': 2,
            'product': {
              'name': 'product_1',
              'points': 100
            }
          },
          {
            'p_id': 2,
            'quantity': 3,
            'product': {
              'name': 'product_2',
              'points': 200
            }
          }
        ]
      }
    ]);
  });
});

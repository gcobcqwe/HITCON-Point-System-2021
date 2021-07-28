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
/**
 * Use sequelize and mock querying.
 */
const db = {
  Sequelize: {
    Op: {
      or: 'or'
    }
  },
  sequelize: {
    transaction() {
      return Promise.resolve({
        commit: jest.fn(),
        rollback: jest.fn()
      });
    }
  },
  users: {
    findByPk() {
      return Promise.resolve({
        uid: 'eea2faf2ec64ae85df1da5a16348f051',
        role: 'client',
        points: 100
      });
    },
    findAll() {
      return Promise.resolve([{
        uid: 'eea2faf2ec64ae85df1da5a16348f051',
        role: 'client',
        points: 100
      }, {
        uid: 'eea2faf2ec64ae85df1da5a16348f052',
        role: 'vendor',
        points: 200
      }]);
    },
    create() {
      return Promise.resolve({
        uid: 'eea2faf2ec64ae85df1da5a16348f051',
        role: 'client',
        points: 100
      });
    },
    update() {
      return Promise.resolve({
        uid: 'eea2faf2ec64ae85df1da5a16348f051',
        role: 'client',
        points: 150
      });
    },
    destroy() {
      return Promise.resolve(true);
    },
    decrement: jest.fn(),
    increment: jest.fn()
  },
  redeem_codes: {
    findByPk(key) {
      if (key === '4c1af499-e472-487e-be59-a1adda9a0d07') {
        return {
          code: '4c1af499-e472-487e-be59-a1adda9a0d07',
          issuer: 'eea2faf2ec64ae85df1da5a16348f051',
          points: 100,
          created_at: '2021-06-26 14:19:21.849228+00'
        };
      }
      return null;
    },
    findAll() {
      return Promise.resolve([{
        code: '4c1af499-e472-487e-be59-a1adda9a0d07',
        issuer: 'eea2faf2ec64ae85df1da5a16348f051',
        points: 100,
        created_at: '2021-06-26 14:19:21.849228+00'
      }]);
    },
    create() {
      return Promise.resolve({
        code: '4c1af499-e472-487e-be59-a1adda9a0d07',
        issuer: 'eea2faf2ec64ae85df1da5a16348f051',
        points: 100,
        created_at: '2021-06-26 14:19:21.849228+00'
      });
    },
    destroy: jest.fn()
  },
  transactions: {
    create: jest.fn(),
    findAll() {
      return Promise.resolve([
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
    }
  },
  events: {
    findByPk() {
      return Promise.resolve({
        point_system_token: 'TEST_TOKEN1'
      });
    }
  },
  products: {
    findByPk() {
      return Promise.resolve({
        id: '1',
        name: 'product_1',
        description: '',
        image_url: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        points: 100,
        quantity: 5
      });
    },
    findAll() {
      return Promise.resolve([{
        id: '1',
        name: 'product_1',
        description: '',
        image_url: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        points: 100,
        quantity: 5
      }, {
        id: '2',
        name: 'product_2',
        description: '',
        image_url: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        points: 200,
        quantity: 7
      }]);
    },
    create() {
      return Promise.resolve({
        id: '1',
        name: 'product_1',
        description: '',
        image_url: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        points: 100,
        quantity: 5
      });
    },
    update() {
      return Promise.resolve({
        id: '1',
        name: 'product_1',
        image_url: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        description: '',
        points: 150,
        quantity: 5
      });
    },
    destroy() {
      return Promise.resolve(true);
    },
    decrement: jest.fn(),
    increment: jest.fn()
  }
};

module.exports = db;

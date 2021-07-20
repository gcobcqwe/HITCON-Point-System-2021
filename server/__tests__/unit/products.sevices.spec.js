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
const ProductsService = require('../../services/Products');
const productsServiceInstance = new ProductsService(dbMock);

describe('[Test] Products Service', () => {
  it('Create instance of service', async () => {
    expect(productsServiceInstance).toBeInstanceOf(ProductsService);
  });
  it('Exposes the find method', async () => {
    expect(productsServiceInstance.find).toBeDefined();
  });
  it('Exposes the findAll method', async () => {
    expect(productsServiceInstance.findAll).toBeDefined();
  });
  it('Exposes the add method', async () => {
    expect(productsServiceInstance.add).toBeDefined();
  });
  it('Exposes the update method', async () => {
    expect(productsServiceInstance.update).toBeDefined();
  });
  it('Exposes the destroy method', async () => {
    expect(productsServiceInstance.destroy).toBeDefined();
  });
});

describe('[Test] find method', () => {
  it('Success', async () => {
    const result = await productsServiceInstance.find('1');
    expect(result).toMatchObject({
      id: '1',
      name: 'product_1',
      description: '',
      points: 100,
      quantity: 5
    });
  });
});

describe('[Test] findAll method', () => {
  it('Success', async () => {
    const result = await productsServiceInstance.findAll();
    expect(result).toMatchObject([{
      id: '1',
      name: 'product_1',
      description: '',
      points: 100,
      quantity: 5
    }, {
      id: '2',
      name: 'product_2',
      description: '',
      points: 200,
      quantity: 7
    }]);
  });
});

describe('[Test] add method', () => {
  it('Success', async () => {
    const result = await productsServiceInstance.add({
      name: 'product_1',
      description: '',
      points: 100,
      quantity: 5
    });
    expect(result).toMatchObject({
      id: '1',
      name: 'product_1',
      description: '',
      points: 100,
      quantity: 5
    });
  });
});

describe('[Test] update method', () => {
  it('Success', async () => {
    const result = await productsServiceInstance.update({
      points: 150
    });
    expect(result).toMatchObject({
      id: '1',
      name: 'product_1',
      description: '',
      points: 150,
      quantity: 5
    });
  });
});

describe('[Test] destroy method', () => {
  it('Success', async () => {
    const result = await productsServiceInstance.destroy('1');
    expect(result).toEqual(true);
  });
});

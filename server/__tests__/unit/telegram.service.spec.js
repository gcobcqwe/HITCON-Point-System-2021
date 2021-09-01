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
const codeCacheMock = require('../support/codeCacheMock');
const codeGeneratorMock = require('../support/codeGeneratorMock');
const TelegramService = require('../../services/Telegram');
const telegramServiceInstance = new TelegramService(codeCacheMock, codeGeneratorMock, dbMock);

describe('[Test] Users Service', () => {
  it('Create instance of service', async () => {
    expect(telegramServiceInstance).toBeInstanceOf(TelegramService);
  });
  it('Exposes the token method', async () => {
    expect(telegramServiceInstance.token).toBeDefined();
  });
  it('Exposes the set method', async () => {
    expect(telegramServiceInstance.generateCode).toBeDefined();
  });
});

describe('[Test] get method', () => {
  beforeAll(async () => {
    await codeCacheMock.set('OOOOOOOOOOOOOOOOXXXXXXXXXXXXXXXX', 'TEST_TOKEN1');
  });

  afterAll(async () => {
    await codeCacheMock.del('OOOOOOOOOOOOOOOOXXXXXXXXXXXXXXXX');
  });

  it('Hit', async () => {
    const result = await telegramServiceInstance.token('OOOOOOOOOOOOOOOOXXXXXXXXXXXXXXXX');
    expect(result).toEqual('TEST_TOKEN1');
  });

  it('Miss', async () => {
    const result = await telegramServiceInstance.token('XXXXXXXXXXXXXXXXOOOOOOOOOOOOOOOO');
    expect(result).toBeUndefined();
  });

  // TODO: Add a timeout situation test case.
});

describe('[Test] generateCode method', () => {
  it('Success', async () => {
    await telegramServiceInstance.generateCode('eea2faf2ec64ae85df1da5a16348f051');
    const result = await telegramServiceInstance.token('OOOOOOOOOOOOOOOOXXXXXXXXXXXXXXXX');
    expect(result).toEqual('TEST_TOKEN1');
  });
});

/* eslint-disable max-len */
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
const {ReasonPhrases, StatusCodes} = require('http-status-codes');
const logger = require('../util/logger');
const db = require('../models');
const ProductsService = require('../services/Products');
const productsServiceInstance = new ProductsService(db);
/**
 * @description if id does not equal to undefined, attempt to get product information using id, else attempt to get all products information.
 * @param {Request} req
 * @param {Response} res
 */
async function find( req, res ) {
  try {
    const id = req.params.id;
    if (id) {
      if (isNaN(id)) throw new Error('The request parameter is invalid.');
      const result = await productsServiceInstance.find(parseInt(id));
      if (!result) throw new Error('The id is not found');
      res.status(StatusCodes.OK).send(result);
      return;
    }
    const result = await productsServiceInstance.findAll();
    res.status(StatusCodes.OK).send(result);
  } catch (e) {
    logger.error(e);
    res.status(StatusCodes.BAD_REQUEST).send({message: ReasonPhrases.BAD_REQUEST});
  }
}

/**
   * @description  Attempt to add a product.
   * @param {Request} req
   * @param {Response} res
   */
async function add( req, res ) {
  try {
    const name = req.body.name;
    const description = req.body.description || '';
    const imageUrl = req.body.image_url || '';
    const points = req.body.points || 0;
    const quantity = req.body.quantity || 0;
    if (typeof name !== 'string' || typeof description !== 'string' || typeof imageUrl !== 'string' || typeof points !== 'number' || typeof quantity !== 'number') throw new Error('The request parameter is invalid.');
    await productsServiceInstance.add({name, description, image_url: imageUrl, points, quantity});
    res.status(StatusCodes.OK).send({message: ReasonPhrases.OK});
  } catch (e) {
    logger.error(e);
    res.status(StatusCodes.BAD_REQUEST).send({message: ReasonPhrases.BAD_REQUEST});
  }
}

/**
   * @description Attempt to update product information.
   * @param {Request} req
   * @param {Response} res
   */
async function update( req, res ) {
  try {
    const id = req.body.id;
    const name = req.body.name;
    const description = req.body.description;
    const imageUrl = req.body.image_url;
    const points = req.body.points;
    const quantity = req.body.quantity;
    if (typeof id !== 'number' || (name !== undefined && typeof name !== 'string') || (description !== undefined && typeof description !== 'string') || (imageUrl !== undefined && typeof imageUrl !== 'string') || (points !== undefined && typeof points !== 'number') || (quantity !== undefined && typeof quantity !== 'number')) throw new Error('The request parameter is invalid.');
    await productsServiceInstance.update({id, name, description, image_url: imageUrl, points, quantity});
    res.status(StatusCodes.OK).send({message: ReasonPhrases.OK});
  } catch (e) {
    logger.error(e);
    res.status(StatusCodes.BAD_REQUEST).send({message: ReasonPhrases.BAD_REQUEST});
  }
}

/**
   * @description Attempt to delete product using id.
   * @param {Request} req
   * @param {Response} res
   */
async function destroy( req, res ) {
  try {
    const id = req.body.id;
    if (typeof id !== 'number') throw new Error('The request parameter is invalid.');
    await productsServiceInstance.destroy(id);
    res.status(StatusCodes.OK).send({message: ReasonPhrases.OK});
  } catch (e) {
    logger.error(e);
    res.status(StatusCodes.BAD_REQUEST).send({message: ReasonPhrases.BAD_REQUEST});
  }
}

module.exports = {
  find,
  add,
  update,
  destroy
};

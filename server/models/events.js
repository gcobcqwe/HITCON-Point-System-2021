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

'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  /**
   * Events Model
   * @class
   */
  class Events extends Model {
    /**
     * Associate
     * @static
     * @param {Model} models
     */
    static associate(models) {
      Events.belongsTo(models.users, {foreignKey: 'uid'});
    }
  }
  Events.init({
    uid: {
      type: DataTypes.STRING(50),
      primaryKey: true,
      unique: true,
      notEmpty: true
    },
    private_kktix_code: {
      type: DataTypes.STRING(50),
      unique: true,
      notEmpty: true
    },
    one_page_token: {
      type: DataTypes.TEXT,
      unique: true,
      notEmpty: true
    },
    kof_server_token: {
      type: DataTypes.TEXT,
      unique: true,
      notEmpty: true
    },
    online_token: {
      type: DataTypes.TEXT,
      unique: true,
      notEmpty: true
    },
    point_system_token: {
      type: DataTypes.TEXT,
      unique: true,
      notEmpty: true
    },
    streaming_link: {
      type: DataTypes.TEXT,
      notEmpty: true
    }
  }, {
    sequelize,
    modelName: 'events',
    createdAt: false,
    updatedAt: false
  });
  return Events;
};

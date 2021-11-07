/* eslint-disable guard-for-in */
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

const {THE_USER_IS_NOT_FOUND, THE_EMAIL_SENDER_IS_COOLING_DOWN, FAILED_TO_DELIVER_EMAIL} = require('../config/error');
const config = require('../config');
const mailchimpClient = require('@mailchimp/mailchimp_transactional')(config.mailchimp_api_key);

/**
 * Create a new Users service.
 * @class
 */
class Users {
  /**
   * @description Create an instance of Users service.
   * @param {RedisClient} redisClient
   * @param {Object} db
   */
  constructor(redisClient, db) {
    this.redisClient = redisClient;
    this._db = db;
  }

  /**
   * @description Attempt to get user information using uid.
   * @param {String} uid The user id
   * @return {Promise}
   */
  async find(uid) {
    return this._db.users.findByPk(uid);
  }

  /**
   * @description Attempt to get events using uid.
   * @param {String} uid The user id
   * @return {Promise}
   */
  async events(uid) {
    return this._db.events.findByPk(uid);
  }

  /**
   * @description Attempt to get user one page token using private KKTix code.
   * @param {String} code The private KKTix code
   * @return {Promise}
   */
  async token(code) {
    const usersReturning = await this._db.users.findOne({where: {private_kktix_code: code}, attributes: ['uid']});
    if (!usersReturning) throw new Error(THE_USER_IS_NOT_FOUND);
    return this._db.events.findByPk(usersReturning.uid, {attributes: ['one_page_token']});
  }

  /**
   * @description Attempt to send an email.
   * Follow the SPEC, an email is possible to map to many users.
   * Send emails to all users in this email.
   * Every email with uid has a cool-down period of 300 seconds. Format: EMAIL:COOL_DOWN:<EMAIL>
   * @param {String} email The user email
   */
  async sendEmail(email) {
    const usersArray = await this._db.users.findAll({
      where: {email},
      attributes: ['uid', 'nickname'],
      include: {
        model: this._db.events,
        attributes: ['one_page_token'],
        required: false
      }});
    if (!usersArray.length) throw new Error(THE_USER_IS_NOT_FOUND);

    // Check the email status. If the email is cooling down, then throw an error.
    const isEmailActive = await this.redisClient.setnx(`${config.redis_prefix.EMAIL_COOL_DOWN}${email}`, 1);
    // TODO: Let users know the cool-down time by TTL return.
    if (!isEmailActive) throw new Error(THE_EMAIL_SENDER_IS_COOLING_DOWN);

    for (let i = 0; i < usersArray.length; i++) {
      const user = usersArray[i];

      // Send an email.
      const emailContent = {
        nickname: user.nickname,
        onePageLink: `${config.web_endpoint}/?token=${user.event.one_page_token}`
      };
      const template = composeTemplate(emailContent, config.email_from, config.email_name_from, email, config.mailchimp_template_name);
      const emailResponse = await mailchimpClient.messages.sendTemplate(template);
      if (emailResponse[0].status !== 'sent') {
        console.error(emailResponse);
        throw new Error(FAILED_TO_DELIVER_EMAIL);
      }

      // Update user data.
      await this._db.users.update({is_email_sent: true}, {where: {[this._db.Sequelize.Op.and]: [
        {uid: user.uid},
        {email}
      ]}});

      // Sleep 100ms for the rate limit.
      await new Promise((r) => {
        return setTimeout(r, 100);
      });
    }
  }
}

/**
 * @description Compose an email template.
 * @param {Object} emailContent The email content, e.g. {nickname: 'test3', one_page_link:<LINK>}
 * @param {String} fromEmail The sender email
 * @param {String} fromEmailName The sender name
 * @param {String} toEmail The receiver email
 * @param {String} templateName The mailChimp template name
 * @return {Object}
 */
function composeTemplate(emailContent, fromEmail, fromEmailName, toEmail, templateName) {
  const message = {
    'subject': 'HITCON 2021 參與通知信',
    'from_email': fromEmail,
    'from_name': fromEmailName,
    'to': [{
      'email': toEmail,
      'type': 'to'
    }],
    'merge_language': 'handlebars',
    'headers': {
      'Reply-To': fromEmail
    },
    'global_merge_vars': arrayFromObject(emailContent)
  };

  const template = {
    template_name: templateName,
    template_content: [],
    message: message,
    async: false
  };

  return template;
}

const arrayFromObject = (content) => {
  const val = [];
  for (const key in content) {
    val.push({name: key, content: content[key]});
  }
  return val;
};

module.exports = Users;

const express = require('express');
const controller  = require('../app/controllers/mails.controller.js')
const router = express.Router();



router.post('/send-mail', controller.sendMail);
   



module.exports = router;
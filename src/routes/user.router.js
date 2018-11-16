const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const jwtHelpher = require('../../config/jwtHelpher');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userprofile', jwtHelpher.verifyJwtToken, ctrlUser.userProfile);

module.exports = router;

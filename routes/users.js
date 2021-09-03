const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator/check')

const Users = require('../models/User')


// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
    '/',
    [
        check('name', 'Name required...').not().isEmpty(),
        check('email', 'Valid email required...').isEmail(),
        check('password', 'PW >6 charcaer...').isLength({min: 6}),
    ],
    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }
        res.send(req.body);
    })

module.exports = router;
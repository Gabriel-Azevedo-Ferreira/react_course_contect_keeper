const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const {check, validationResult} = require('express-validator/check')

const User = require('../models/User')

// todo: why the check does not use the schema

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
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }
        const {name, email, password} = req.body

        try {
            let user = await User.findOne({email})
            if (user) {
                return res.status(400).json({msg: 'user exists'})
            }
            user = new User({name, email, password})
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save()
            res.send('User send')
        } catch (err) {
            console.log(err.message)
            return res.status(500).send('server error')
        }
        res.send(req.body);
    })

module.exports = router;
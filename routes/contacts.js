const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

const User = require('../models/User')
const Contact = require('../models/Contact')
const {check, validationResult} = require("express-validator");

// @route   GET api/contacts
// @desc    Get all user Contacts
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contact.find({user: req.user.id}).sort({date: -1})
        res.json(contacts)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post(
    '/',
    [auth, [check('name', 'name is required').not().isEmpty()]],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({errors: errors.array()})
        const {name, email, phone, type} = req.body;
        try {
            const newContact = new Contact({name, email, phone, type, user: req.user.id})
            const contact = await newContact.save()
            res.json(contact)
        } catch (err) {
            console.log(err.message)
            res.status(500).send('server error...')
        }
    })

// @route   PUT api/contacts/:id   // :id is a placejholder for the contact
// @desc    Update contact
// @access  Private
router.put('/:id', auth, async (req, res) => {
    const {name, email, phone, type} = req.body;
    const contactFields = {};
    if (name) contactFields.name = name;
    if (email) contactFields.email = email;
    if (phone) contactFields.phone = phone;
    if (type) contactFields.type = type;
    console.log('asfasdfasfadfafaasf')
    try {
        let contact = await Contact.findById(req.params.id)
        console.log('found?')
        if (!contact) return res.status(400).json({msg: "contact not found"})
        //make sure user owns contact
        if (contact.user.toString() !== req.user.id) {
            return res.status(401).json({"msg": 'not authorized'})
        }
        contact = await Contact.findByIdAndUpdate(req.params.id, {$set: contactFields}, {new: true})
        res.json(contact)
    } catch (err) {
        console.log(err.message)
        res.status(500).send('server error...')
    }
})

// @route   DELETE api/contacts/:id   // :id is a placejholder for the contact
// @desc    Delete contact
// @access  Private
router.delete('/:id', auth, (req, res) => {
    res.send("Delete contact");
})

module.exports = router;
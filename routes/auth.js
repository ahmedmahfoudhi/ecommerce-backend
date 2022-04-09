const router = require('express').Router();
const User = require('./../models/User');

// REGISTER
router.post('/register',async (req,res)=>{
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser); // successfully added

    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;
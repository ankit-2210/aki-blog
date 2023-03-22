const User = require("../models/userSchema");
const Contact = require("../models/contactSchema");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

const userSignUp = async (req, res) => {
    console.log(req.body);
    try {
        const userExist = await User.findOne({ username: req.body.username });
        if (userExist) {
            return res.status(401).json({ error: 'User already exist' });
        }

        const user = req.body;
        const newUser = new User(user);
        await newUser.save();

        res.status(200).json({ message: 'User has been successfully registered' });

    }
    catch (error) {
        res.status(500).json(error);
    }
}

const userLogin = async (req, res) => {
    try {
        let user = await User.findOne({ username: req.body.username, password: req.body.password });
        console.log(user);
        if (user) {
            return res.status(200).json(`${req.body.username}`);
        }
        else {
            return res.status(401).json('Invalid Login');
        }
    }
    catch (error) {
        console.log(error);
    }

}

const aboutData = async (req, res) => {
    res.send(req.rootUser);
}


const contactData = async (req, res) => {
    console.log(req.body);
    try {
        const contact = await new Contact(req.body);
        contact.save();

        res.status(200).json("Contact save successfully");
    }
    catch (error) {
        console.log(error);
    }

}

module.exports.userSignUp = userSignUp;
module.exports.userLogin = userLogin;
module.exports.aboutData = aboutData;
module.exports.contactData = contactData;
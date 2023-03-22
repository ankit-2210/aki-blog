const mongoose = require("mongoose");
const { MONGOURI } = require('../config/keys');

const Connection = async () => {
    // const DB = `mongodb+srv://ankit:ankit@blog.shvff.mongodb.net/BLOG?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(MONGOURI, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }

}

module.exports = Connection;

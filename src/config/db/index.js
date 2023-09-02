const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect('mongodb+srv://vinhhd227:N7BxZmxKY1K9Z9IU@f8-blog.ocynvai.mongodb.net/blog');
        console.log('Connect successfully!!!')
    } catch (error) {
        console.log('Connect failure!!!')
    }
}

module.exports = { connect };
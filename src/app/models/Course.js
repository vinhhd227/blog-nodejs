const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 1000 },
    img: { type: String, maxLength: 255 },
    createBy: { type: String, maxLength: 255 },
    createTime: { type: Date, default: Date.now },
    updateTime: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
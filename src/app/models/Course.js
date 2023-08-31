const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, maxLength: 255, require: true, },
    description: { type: String, maxLength: 1000 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 30 },
    slug: { type: String, slug: 'name', unique: true, },
    createBy: { type: String, default: 'vinh' },
    level: { type: String, maxLength: 20 },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);
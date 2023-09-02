const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');

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
// Add plugins
mongoose.plugin(slug);
Course.plugin(mongoose_delete, {
    deletedAt: true,
    overrideMethods: 'all',
});
module.exports = mongoose.model('Course', Course);
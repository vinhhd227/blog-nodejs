const Course = require('../models/Course');
class SitesController {
    // [GET] '/'
    async index(req, res) {
        try {
            const courses = await Course.find({});
            res.json(courses);
        } catch (err) {
            res.status(400).json({ error: 'Error!!!' });
        }
        //res.render('home');
    }
    // [GET] '/search'
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SitesController();

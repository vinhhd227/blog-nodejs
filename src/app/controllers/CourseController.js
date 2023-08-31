const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
class CourseController {
    // [GET] '/courses'
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('courses/index', {
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(next);
    }
    // [GET] '/courses/:slug'
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug }).exec()
            .then(course => {
                res.render('courses/show', {
                    course: mongooseToObject(course)
                })
            })
            .catch(next);
    }
    // [GET] '/courses/create'
    create(req, res) {
        res.render('courses/create');
    }
    // [POST] '/courses/store'
    store(req, res) {
        const formData = req.body
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save().then(() => res.redirect('/courses'))
            .catch(error => {

            });
    }
}

module.exports = new CourseController();

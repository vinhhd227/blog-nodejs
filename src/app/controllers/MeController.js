const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
class MeController {
    // [GET] '/me/stored/courses'
    storedCourses(req, res, next) {
        Course.find({}).exec()
            .then(courses => {
                res.render('me/stored-courses', {
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(next);
    }
    // // [GET] '/courses/create'
    // create(req, res) {
    //     res.render('courses/create');
    // }
    // // [POST] '/courses/store'
    // store(req, res) {
    //     const formData = req.body
    //     formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    //     const course = new Course(formData);
    //     course.save().then(() => res.redirect('/courses'))
    //         .catch(error => {

    //         });
    // }
}

module.exports = new MeController();

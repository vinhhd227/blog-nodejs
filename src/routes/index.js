const newsRouter = require('./news');
const siteRouter = require('./sites');
const coursesRouter = require('./course');
function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}
module.exports = route;

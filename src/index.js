const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');

const app = express();
const route = require('./routes');

const db = require('./config/db');


// Connect to db
db.connect();

const port = 3000;
// Config static files
app.use(express.static(path.join(__dirname, 'public')));
// Use Middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
// HTTP logger
// app.use(morgan('combined'));
// Template engine
app.engine(
    'hbs',
    exphbs.engine({
        extname: 'hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', './views');
app.set('views', path.join(__dirname, 'resources', 'views'));
// Route init
route(app);

app.listen(port, () => {
    //console.log(`App listening on http://localhost:${port}`)
});

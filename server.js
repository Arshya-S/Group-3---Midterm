// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));
app.use(cookieSession({
  name: 'session',
  keys: ['0dm1c', 'c91lo', 't23kf'],
  maxAge: 24 * 60 * 60 * 1000
}));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const listsApiRoutes = require('./routes/lists-api.js');
const navItems = require('./routes/nav-items');
const userLogin = require('./routes/login');
const userLogout = require('./routes/logout');
const userProfile = require('./routes/profile');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
app.use('/lists/1', navItems);
// Note: mount other resources here, using the same pattern above
app.use('/lists', listsApiRoutes);
app.use('/login', userLogin);
app.use('/logout', userLogout);
app.use('/profile', userProfile);

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  console.log(req.session);
  res.render('index', { user: req.session['user'] });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

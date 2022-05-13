const path = require('path');
const express = require('express');

const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT|| 3001;

const sesh = {
    secret: 'this is a secret',
    resave: false,
    saveUninitialized: true
};

app.use(session(sesh));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
=======
// app.use(routes);
>>>>>>> c2cc1fdc697667489e316c4f737ff7768e9c8230
app.use(require('./controllers'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
  

const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sess = {
  secret: '765b25eb31a753341f6eeb7db282c364a2645d5ea434320e610b212789fbe81c2cda0981fc11452a2ea31b76097ed9869a7f70564e65414d51be396c873284f4',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));

// Use the routes
app.use(require('./controllers/home-routes'));
app.use(require('./controllers/api/post-routes'));
app.use(require('./controllers/api/login-routes'));
app.use(require('./controllers/api/logout-routes'));
app.use(require('./controllers/api/dashboard-routes'));
app.use(require('./controllers/api/signup-routes'));
app.use(require('./controllers/api/review-routes'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server is now running on http://localhost:${PORT}`));
});
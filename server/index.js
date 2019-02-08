const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');

const app = express();

//passport config
require('./config/passport')(passport);

//dependencies
app.use(bodyParser.json());
app.use(cors());

//session
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

const todos = require('./routes/api/todos');
const users = require('./routes/api/users').router;

app.use('/api/todos', todos);
app.use('/api/users', users);


//handle production
if (process.env.NODE_ENV == 'production') {
	//static folder
	app.use(express.static(__dirname + '/public'));

	//handle single page application
	app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");

const bodyParser = require("body-parser");
const boolParser = require("express-query-boolean");

const session = require("express-session");
const passport = require("passport");

const app = express();

//passport config
require("./config/passport")(passport);

//dependencies
app.use(bodyParser.json());
app.use(boolParser());
app.use(cors());

//session
app.use(session({
	secret: "secret",
	resave: true,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Create connections to users and todos db

let mongoClient;

mongodb.MongoClient.connect(
	"mongodb+srv://hiidamian1:Cymadeagle1!@sideprojects-xmkod.mongodb.net/test?retryWrites=true", {
		useNewUrlParser: true
	}
).then(client => {
	mongoClient = client;

	app.locals.userCollection = client.db("ToDoAppDB").collection("Users");
	app.locals.todoCollection = client.db("ToDoAppDB").collection("ToDos");

	//these routes rely on app.locals
	const todos = require("./routes/api/todos");
	const users = require("./routes/api/users");

	app.use("/api/todos", todos);
	app.use("/api/users", users);

	//handle production
	if (process.env.NODE_ENV == "production") {
		//static folder
		app.use(express.static(__dirname + "/public"));

		//handle single page application
		app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
	}

	//close db connection on program end
	process.on("SIGINT", () => {
		console.log("closing");
		mongoClient.close();
		process.exit();
	});

	const port = process.env.PORT || 5000;

	app.listen(port, () => console.log(`Server started on port ${port}`));
});

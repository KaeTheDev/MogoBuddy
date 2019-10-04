const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.send("Hello PORT 5000!")
});

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log("MongoDB successfully connected!"))
.catch(err => console.log(err));

//process.env.port == HEROKU PORT

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port}!`));

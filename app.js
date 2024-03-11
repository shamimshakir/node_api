const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/users.route");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// routes for users
app.use("/users", userRouter);

// home route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
})

// route not found
app.use((req, res, next) => {
    res.status(400).json({message: "Route not found!"});
})
// server error
app.use((req, res, next) => {
    res.status(500).json({message: "Something went wrong"});
})

module.exports = app;
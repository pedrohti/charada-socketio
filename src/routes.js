const express = require("express");
const routes = express.Router();

routes.get("/chat", (req, res) => {
	res.sendFile(__dirname + "/chat/index.html");
});

module.exports = routes;

const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const chat = require("./src/settings/chat");

http.setMaxListeners(100);

require("dotenv").config();

app.use("/", require("./src/routes"));
app.use(express.static(__dirname + "/src/chat"));

var botList = ["stickroboto", "nightbot", "streamholics", "streamelements"];
var wordList = ["mongol", "mongoloide", "mongoloid"];

io.on("connection", function (socket) {
	chat.on("message", (channel, tags, message, self) => {
		var foundBot = botList.includes(tags.username);

		if (self || foundBot) return;

		io.emit("chat message", tags.username, message);
	});
});

http.listen(process.env.SERVER_PORT, () =>
	console.log("http://localhost:" + process.env.SERVER_PORT),
);

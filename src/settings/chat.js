const tmi = require("tmi.js");
require("dotenv").config();

const CHANNELS = ["stickman1"];

const client = new tmi.Client({
	options: { debug: true },
	connection: {
		reconnect: true,
		secure: true,
	},
	identity: {
		username: process.env.TWITCH_BOT_NAME,
		password: process.env.TWITCH_TMI_TOKEN_BOT,
	},
	channels: CHANNELS,
});

client.connect().catch(console.error);

client.on("join", (channel, tags, message, self) => {
	setInterval(() => {
		var randomColor = Math.floor(Math.random() * 16777215).toString(16);
		client.say(
			channel,
			`/me ${randomColor} Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Si u mundo tá muito paradis?`,
		);
	}, 5000);
});

client.on("message", (channel, tags, message, self) => {
	// if (self) return;
	if (message.toLowerCase() === "!hello") {
		client.say(channel, `@${tags.username}, heya!`);
	}
});

module.exports = client;

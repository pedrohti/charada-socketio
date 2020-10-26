const tmi = require("tmi.js");
require("dotenv").config();

const CHANNELS = ["gaules"];

const client = new tmi.Client({
	options: { debug: true },
	connection: {
		reconnect: true,
		secure: true,
	},
	identity: {
		username: process.env.TWITCH_BOT_NAME,
		password: process.env.TWITCH_TMI_TOKEN,
	},
	channels: CHANNELS,
});

client.connect().catch(console.error);

client.on("message", (channel, tags, message, self) => {
	if (self) return;
	if (message.toLowerCase() === "!hello") {
		client.say(channel, `@${tags.username}, heya!`);
	}
});

module.exports = client;

require("dotenv").config();

const BOT_NAME = process.env.TWITCH_BOT_NAME;
const TOKEN = process.env.TWITCH_TMI_TOKEN;
const CHANNELS = [process.env.TWITCH_CHANNELS];

let options = {
	options: {
		debug: true,
	},
	connection: {
		reconnect: true,
		secure: true,
	},
	identity: {
		username: BOT_NAME,
		password: TOKEN,
	},
	channels: CHANNELS,
};

module.exports = options;

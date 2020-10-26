const axios = require("axios");
require("dotenv").config();

const uri = `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials&scope=`;

var teste = (getUserAccount) => {
	const x = axios.post(uri);
	console.log("ADASD", x.then((x) => x.data.access_token));
};

console.log(teste());

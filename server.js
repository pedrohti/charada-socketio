const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const botConfig = require("./botConfig");
const tmi = require("tmi.js");
const client = new tmi.Client(botConfig);

client.connect();

const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

client.on("message", (channel, tags, message, self) => {
	//io.emit('pede charada', "Bem vindo! "); <== vou usar pra enviar a charada
	// client.say(channel, "Teste de CSS! PogChamp").catch(console.error); // add error handling here
	io.emit('pede charada', channel, message)
});

io.on('connection', (socket) => {
	console.log('IO Connected');
});

io.on('pede charada', (channel, msg) => {
	client.say(channel, msg)
})

http.listen(PORT, () => console.log("http://localhost:" + PORT));

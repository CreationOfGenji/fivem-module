const axios = require('axios');

class Server {
	constructor(ip) {
		if (!ip) throw 'Please provide an IP when using the FiveM class!';
		this.ip = ip;
	}

	getPlayers() {
		return new Promise((send, err) => {
			axios
				.get(`http://${this.ip}/players.json`)
				.then(function(body) {
					let players = body.data;
					send(players.length);
				})
				.catch(function(error) {
					err(error);
				});
		});
	}

	getResources() {
		return new Promise((send, err) => {
			axios
				.get(`http://${this.ip}/info.json`)
				.then(function(body) {
					let resources = body.data.resources;
					send(resources);
				})
				.catch(function(error) {
					err(error);
				});
		});
	}

	getUptime() {
		return new Promise((send, err) => {
			axios
				.get(`http://${this.ip}/info.json`)
				.then(function(body) {
					let uptime = body.data.vars.Uptime;
					send(uptime);
				})
				.catch(function(error) {
					err(error);
				});
		});
	}

	getTags() {
		return new Promise((send, err) => {
			axios
				.get(`http://${this.ip}/info.json`)
				.then(function(body) {
					let tags = body.data.vars.tags;
					send(tags);
				})
				.catch(function(error) {
					err(error);
				});
		});
	}

	getServer() {
		return new Promise((send, err) => {
			axios
				.get(`http://${this.ip}/info.json`)
				.then(function(body) {
					let server = body.data.server;
					send(server);
				})
				.catch(function(error) {
					err(error);
				});
		});
	}
}

module.exports.Server = Server;

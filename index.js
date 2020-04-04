const request = require('request');
const cheerio = require("cheerio")

class Server {
    constructor(ip){
        if(!ip) throw "Please provide an IP when using the FiveM class!"
        this.ip = ip;
    }

    getPlayers(){
        return new Promise((send, err) => {
            request(`http://${this.ip}/players.json`, function (error, response, body) {
                if (error) {
                    err(error);
                } else {
                    send(Object.entries(JSON.parse(body)).length)
                }
            });
        })
    }

    getResources(){
        return new Promise((send, err) => {
            request(`http://${this.ip}/info.json`, function (error, response, body) {
                if(error) {
                    err(error)
                } else {
                    let resources = Object.values(JSON.parse(body))[2]
                    send(resources)
                }
            })
        })
    }

    getUptime(){
        return new Promise((send, err) => {
            request(`http://${this.ip}/info.json`, function (error, response, body) {
                if(error) {
                    err(error)
                } else {
                    let uptime = Object.values(JSON.parse(body))[4].Uptime;
                    send(uptime)
                }
            })
        })
    }

    getTags(){
        return new Promise((send, err) => {
            request(`http://${this.ip}/info.json`, function (error, response, body) {
                if(error) {
                    err(error)
                } else {
                    let tags = Object.values(JSON.parse(body))[4].tags;
                    send(tags)
                }
            })
        })
    }

    getServer(){
        return new Promise((send, err) => {
            request(`http://${this.ip}/info.json`, function (error, response, body) {
                if(error) {
                    err(error)
                } else {
                    let uptime = Object.values(JSON.parse(body))[3];
                    send(uptime)
                }
            })
        })
    }
}


module.exports = Server;
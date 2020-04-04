# What is this?

 A simple FiveM module to suit your needs!

# Usage And Installation

 `npm i fivem-module`

 ```js
const FiveM = require("fivem-module")
//initalizes the Server class (make sure you put your server ip where it says 'Server IP')
const server = new FiveM.Server('Server IP')

//Get Players (in numbers)
server.getPlayers()
.then(data => console.log(data))

//Get The Uptime Of The Server
server.getUptime()
.then(data => console.log(data))

//Get The Resources This Server Uses In An Array
server.getResources()
.then(data => console.log(data))

//Get The Tags Of This Server
server.getTags()
.then(data => console.log(data))

//Get The Server This Server Is Running On
server.getServer()
.then(data => console.log(data))
```
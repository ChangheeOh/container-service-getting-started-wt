var express = require('express')
var os = require("os");
var ip = require("ip");
var hostname = os.hostname();
var app = express()
const requestIp = require('request-ip');

app.get('/', function(req, res) {
  res.send('Hello world from ' + os.hostname() + '! Your app(' + requestIp.getClientIp(req) + ') is up and running in a container!\n' + ip.address() + '\n')
})
app.listen(8080, function() {
  console.log('hw app is listening on port 8080.')
})

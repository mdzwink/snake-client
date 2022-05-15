const net = require("net");
const { IP, PORT } = require("./constants");
// const setupInput = require('./setupInput')

const connect = () => {
  const server = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  server.setEncoding("utf8");
  
  server.on('data', (data) => {
    console.log(data);
  })

  server.on('connect', () => {
    console.log('...connection ESTABLISHED!!! B)');
    server.write('Name: BOT');
    


  })

  return server;
};

const connectingMsg = console.log("Connecting ...");
const connectCall = connect();

module.exports = { net, connect, connectingMsg, connectCall };

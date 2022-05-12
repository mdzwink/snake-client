const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('data', (data) => {
    console.log(data);
  })

  conn.on('connect', () => {
    console.log('...connection ESTABLISHED!!! B)');
    conn.write('Name: BTM');
  })

  return conn;
};

const connectingMsg = console.log("Connecting ...");
const connectCall = connect();

module.exports = {net, connect, connectingMsg, connectCall};
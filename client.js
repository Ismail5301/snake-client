

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: '50542',
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  

  conn.on("connect", () => {
    console.log('Connecting to Server');
    conn.write('Name: GTR');
    
    //setTimeout(() => {
    //  conn.write('Move: up');
    //}, 1000); 
    //setTimeout(() => {
    //  conn.write('Move: right');
    //}, 4000); 
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {connect};
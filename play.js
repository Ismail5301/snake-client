const net = require("net");

// establishes a connection with the game server
//const handleUserInput = function (key) {
//  if (key === '\u0003') {
//    process.exit();
//  }
//};
//const setupInput = function () {
//  const stdin = process.stdin;
//  stdin.setRawMode(true);
//  stdin.setEncoding("utf8");
//  stdin.resume();
//  stdin.on("data", handleUserInput);
//  return stdin;
//};
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
setupInput(connect());


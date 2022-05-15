let connection;


const setupInput = function (server) {
  connection = server;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  const stdin = process.stdin;
  const stdout = process.stdout;
  
  stdin.on('data', (key) => {
    // console.log(key)
    if (key === '\u0003') {
      stdout.write('exiting.......\n');
      process.exit();
    }
    if (key === 'q') {
      connection.write('Say: hahaha!😎')
    }
    if (key === 'e') {
      connection.write('Say: lol')
    }
    // setInterval(() => {
    //   server.write('Move: up');
    // }, 400)
    if (key === 'w') {
      // console.log(connection())
      move = connection.write('Move: up');
    }
    if (key === 's') {
      move = connection.write('Move: down');
    }
    if (key === 'a') {
      move = connection.write('Move: left');
    }
    if (key === 'd') {
      move = connection.write('Move: right');
    }
  })
  console.log('after callback');
};


module.exports = { setupInput, setupInput }
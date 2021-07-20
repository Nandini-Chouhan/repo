var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello Bts💜!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
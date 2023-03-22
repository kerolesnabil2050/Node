// write inside file info.txt “hello iti”

var fs = require('fs');

// Write "hello iti" to info.txt
fs.writeFile('info_2.txt', 'Hello ITI', (err) => {
  if (err) throw err;
  console.log('successfully inserted Data!');
});
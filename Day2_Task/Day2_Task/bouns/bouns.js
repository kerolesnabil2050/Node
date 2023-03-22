// 7- create Dir -> bonus 

var fs = require('fs');

// Create directory
var fs=require('fs')
// - as async
fs.mkdir('myDirerctory', (err) => {
  if (err) throw err;
  console.log('myDirerctory created!');
});



console.log('Done!');
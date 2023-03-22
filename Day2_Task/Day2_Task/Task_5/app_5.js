//Read data from data.json file.
const fs = require('fs')

// as sync

var JsonDatasync = fs.readFileSync(__dirname + '/data.json', 'utf8');
console.log(JsonDatasync);

// as Async
var JsonDataAsync = fs.readFile(__dirname + '/data.json', 'utf8', function(err, data) {
	console.log(data);
});

console.log('Done!');



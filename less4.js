var level = require('level');
var db = level(process.argv[2]);
var input = JSON.parse(process.argv[3]);

for(var key in input){
	db.put(key, input[key]);
}
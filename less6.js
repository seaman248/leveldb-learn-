var level = require('level'),
	db = level(process.argv[2]);

db.createReadStream().on('data', function(data){
	console.log(data.key + '=' + data.value);
})	


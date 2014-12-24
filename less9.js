var level = require('level'),
	path = process.argv[2];


var db = level(path, {valueEncoding: 'json'});
var users = require(process.argv[3]);

var dbusers = users.map(function(item){
	var key;
	if (item.type === 'user'){
		key = item.name;
	} 
	else if(item.type === 'repo'){
		key = item.user+'!'+item.name;
	}
	return {type: 'put', key: key, value: item};
});

db.batch(dbusers);

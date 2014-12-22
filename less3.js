var level = require('level');	

var db = level(process.argv[2]);


function getData (index) {
	var key = 'key' + index;
	db.get(key, function(err, data){
		if (err) {
		     if (!err.notFound)
		       throw err;
		   } 
		else console.log(key + '=' + data);
		if (index < 100) getData(index + 1);
	});
}

getData(0);

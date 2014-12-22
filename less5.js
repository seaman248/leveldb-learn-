var level = require('level'),
	db = level(process.argv[2]),
	path = process.argv[3],
	fs = require('fs');


var batch = db.batch();

fs.readFile(path, function(err, data){
	if(err) console.error(err);
	var lines = data.toString().split('\n');
	
	lines.map(function(item){
		var dcv = item.split(',');
		if(dcv[0] === 'del'){
			batch.del(dcv[1])
		}
		else{
			batch.put(dcv[1], dcv[2]);
		}

	});
	batch.write();
});





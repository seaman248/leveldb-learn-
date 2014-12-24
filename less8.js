module.exports = function(db, date, cb){
	var twits = [];
	db.createReadStream({start: date, end: date+'\xff'})
		.on('data', function(data){
			twits.push(data.value);
		})
		.on('error', function(err){
			if(cb) cb(err);
			cb = null;
		})
		.on('end', function(){
			if (cb) cb(null, twits);
			cb = null
		});
}

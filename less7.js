
module.exports = function(db, date, cb){
		var dataLength = 0;
	db.createReadStream({start: date})
		.on('data', function(data){
			dataLength ++;
		}).on('err', function(err){
			cb(err);
		}).on('end', function(){
			cb(null, dataLength);
		});
}
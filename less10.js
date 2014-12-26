module.exports.init = function (db, words, cb) {
	var batch = words.map(function(item){
		var key = item.length+'!'+item;
		return {type: 'put', key: key, value: item};
	})
	db.batch(batch, cb);
}

module.exports.query = function(db, word, cb){
	var words = [];
	var key = word.length + '!' + word.replace(/\*/g, '');
	db.createReadStream({start: key, end: key+'\xff'})
		.on('data', function(data){
			words.push(data.value);
		})
		.on('error', function(err){
			cb(err);
		})
		.on('end', function(){
			cb(null, words);
		});
}
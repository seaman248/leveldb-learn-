var level = require('level');
var sub = require('level-sublevel');
var db = sub(level(process.argv[2]));

var robots = db.sublevel('robots');
var dinosaurs = db.sublevel('dinosaurs');


//robots.put('slogan', 'rawr');

robots.batch([{type: 'put', key: 'slogan', value: 'beep boop'}]);
dinosaurs.batch([{type: 'put', key: 'slogan', value: 'rawr'}]);
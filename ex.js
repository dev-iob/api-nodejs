var cs = require('./CSutils.js');
var fs = require('fs');

cs.getCursos({name : '', key : '', partner : 1},function(result){
	console.log(JSON.stringify(result));
});
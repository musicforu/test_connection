var format=':method :url';
function setup(format){
	var regexp=/:(\w+)/g;
	var str=format.replace(regexp,function(match,property){
		return property;
	})
	return str;
}

var result=setup(format);
console.log('type: %s value: %s',typeof result,result);
console.log('result[0]: %s',result[0]);
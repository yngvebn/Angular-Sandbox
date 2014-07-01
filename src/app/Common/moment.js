angular.module('sandbox')
	.filter('format', function(){
	return function(val, key){
		if(!val) return "";
		return val.format(key);
	}});
angular.module('sandbox')
	.filter('format', function(){
	return function(val, key){
		return val.format(key);
	}});
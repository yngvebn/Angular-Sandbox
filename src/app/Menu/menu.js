angular.module('sandbox').controller('Menu', function(RouteTable){
	this.items = RouteTable.routes;
})
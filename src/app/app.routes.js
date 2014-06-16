angular.module('sandbox').config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'views/home.html',
		controllerAs: 'home',
		controller: 'Home'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);
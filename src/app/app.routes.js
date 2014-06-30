angular.module('sandbox').constant('RouteTable', {
	routes: [{
		url: '/',
		name: 'Home',
		templateUrl: 'views/home.html',
		controllerAs: 'home',
		controller: 'Home'
	}, {
		url: '/calendar',
		name: 'Calendar',
		templateUrl: 'views/Calendar/calendar.html',
		controllerAs: 'calendar',
		controller: 'Calendar'
	}]
});


angular.module('sandbox').config(function($routeProvider, RouteTable){

	for (var i = RouteTable.routes.length - 1; i >= 0; i--) {
		var route = RouteTable.routes[i];
		$routeProvider.when(route.url, route);
	};


	
	$routeProvider.otherwise({
		redirectTo: '/'
	});
});
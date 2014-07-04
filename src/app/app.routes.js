angular.module('sandbox').config(function($stateProvider, $urlRouterProvider){

	$stateProvider
		.state('home', {
			templateUrl: 'views/home.html',
			controller: 'Home as home',
			url: '/home'
		})  /* Nested views under Home begins */
			.state('home.main', { /* if a state called 'home' does not exist this will not work. The dot-syntax requires a parent*/
				templateUrl: 'views/home.main.html',
				controller: 'HomeMain as homeMain',
				url: '.main' /* Not necessary, but required if you need deep-linking. URL will be '/#/home.main' */ 
			})
			.state('home.list', {
				templateUrl: 'views/home.list.html',
				controller: 'HomeList as homeList', /* The 'Controller as'-syntax is optional - http://toddmotto.com/digging-into-angulars-controller-as-syntax/  */
				url: '.list'
			})
			.state('home.profile', {
				templateUrl: 'views/home.profile.html',
				controller: 'HomeProfile as homeList',
				url: '.profile'
			})
			.state('home.about', {
				templateUrl: 'views/home.about.html',
				controller: 'HomeAbout as homeList',
				url: '.about'
			});
			/* Nested views under Home ends */
	
	$urlRouterProvider.otherwise('/home.main') /* For all unknown states, redirect to this */
});
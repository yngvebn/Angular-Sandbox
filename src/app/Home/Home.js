
angular.module('sandbox').controller('Home', function($scope){
	this.greeting = 'Hello world!';
	this.age = 20;
	this.search = {
		section: 1
	};
	this.minPrice = 0;
	this.maxPrice = 0;

	this.price_filters = [{
        "value": 100000,
        "section": 1
    }, {
        "value": 250000,
        "section": 1
    }, {
        "value": 500000,
        "section": 1
    }, {
        "value": 750000,
        "section": 1
    }, {
        "value": 1000000,
        "section": 1
    }, {
        "value": 2000000,
        "section": 1
    }, {
        "value": 5000000,
        "section": 1
    }, {
        "value": 500,
        "section": 2
    }, {
        "value": 1000,
        "section": 2
    }, {
        "value": 2000,
        "section": 2
    }, {
        "value": 3000,
        "section": 2
    }, {
        "value": 4000,
        "section": 2
    }, {
        "value": 6000,
        "section": 2
    }, {
        "value": 10000,
        "section": 2
    }, {
        "value": 20000,
        "section": 2
    }, {
        "value": 50000,
        "section": 2
    }]

});
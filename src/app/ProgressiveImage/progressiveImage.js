angular.module('sandbox').directive('progressiveImage', function(){
	return {
		restrict: 'E',
		scope: {
			temp: '@'
		}, 
		link: function(scope, element){
			console.log('progressiveImage', arguments);
		}
	}
});

angular.module('sandbox').directive('autosize', function($timeout, $window){
	return {
		restrict: 'A',
		link: function(scope, element){
			var ratio = 0;
			var el = element[0];
			el.onload = function(){
				ratio = el.offsetWidth / el.offsetHeight;

			}

			function resizeWidth(width){
				el.removeAttribute('height');
				el.setAttribute('width', width);
			}

			function resizeHeight(height){
				el.removeAttribute('width');
				el.setAttribute('height', height);
			}

			function checkSize(){
				var windowRatio = $window.innerWidth / $window.innerHeight;
				console.log(windowRatio, ratio);
				if(windowRatio > ratio){
					resizeWidth($window.innerWidth);
				}else{
					resizeHeight($window.innerHeight);
				}
			}

			$window.onresize =function(){
				checkSize();
			}

			checkSize();
		}
	}
})


angular.module('sandbox').directive('image', function(){
	return {
		restrict: 'E',
		template: '<img ng-src="{{imageUrl}}">',
		require: '^progressiveImage',
		scope: {
			imageUrl: '',
			url: '@',
			mediaQuery: ''

		},
		link: function(scope, element){
			console.log('image', arguments);
		}
	}
})
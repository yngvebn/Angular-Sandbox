angular.module('sandbox').controller('Calendar', function(calendarService){
	this.today = moment();
	this.mode = 'month'

	this.selectedMonth = this.today.month();
	this.selectedYear = this.today.year();

	this.setSelectedMonth = function(month){
		this.selectedMonth = moment().month(month).month();
	}
	
});

angular.module('sandbox').directive('calendar', function(){
	return {
		restrict: 'EA',
		templateUrl: '/views/Calendar/calendar-directive.html',
		scope: {
			displayMonth: '=',
			displayYear: '=',
			mode: '='
		},
		link: function($scope){
			function getMonth(month, year){
				var returnArray = [];

				var firstOfMonth = moment({ year: year, month: month, day: 1});
				var lastOfMonth = moment({ year: year, month: month, day: moment().daysInMonth(month)});
				var calendarStart = firstOfMonth.add(-1 * firstOfMonth.weekday(), 'day');
				var calendarEnd = lastOfMonth.add(6-lastOfMonth.weekday(), 'day');

				returnArray.push(moment(calendarStart));
				var currentDay = calendarStart.add(1, 'day');
				while(currentDay < calendarEnd){
					var momentToPush = moment(currentDay);
					returnArray.push(momentToPush);
					currentDay = currentDay.add(1, 'day');
				}

				returnArray.push(calendarEnd);

				return returnArray;
			}
			
			$scope.$watch('displayMonth', function(){
				$scope.days = getMonth($scope.displayMonth, $scope.displayYear)	
			})
			$scope.days = getMonth($scope.displayMonth, $scope.displayYear)
		}
	}
})
angular.module('sandbox').service('calendarService', function(){
	this.getMonth = function(year, month){
		var returnArray = [];

		var firstOfMonth = moment({ year: year, month: month, day: 1});
		var lastOfMonth = moment({ year: year, month: month, day: moment().daysInMonth(month)});
		var calendarStart = firstOfMonth.add(-1 * firstOfMonth.weekday(), 'day');
		var calendarEnd = lastOfMonth.add(6-lastOfMonth.weekday(), 'day');

		returnArray.push(moment(calendarStart));
		var currentDay = calendarStart.add(1, 'day');
		while(currentDay < calendarEnd){
			returnArray.push(moment(currentDay));
			currentDay = currentDay.add(1, 'day');
		}

		returnArray.push(calendarEnd);

		return returnArray;
	}
})
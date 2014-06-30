angular.module('sandbox').controller('Calendar', function(){
	this.today = moment();

	function getCurrentCalendarView(){
		var returnArray = [];

		var firstOfMonth = moment({ year: moment().year(), month: moment().month(), day: 1});
		var lastOfMonth = moment({ year: moment().year(), month: moment().month(), day: moment().daysInMonth(moment().month())});
		var calendarStart = firstOfMonth.add(-1 * firstOfMonth.weekday(), 'day');
		var calendarEnd = lastOfMonth.add(6-lastOfMonth.weekday(), 'day');

		returnArray.push(moment(calendarStart));
		var currentDay = calendarStart.add(1, 'day');
		while(currentDay < calendarEnd){
			returnArray.push(moment(currentDay));
			currentDay = currentDay.add(1, 'day');
			console.log(currentDay.format('YYYY-MM-DD'))
		}

		returnArray.push(calendarEnd);

		return returnArray;
	}

	this.days = getCurrentCalendarView();

	
});
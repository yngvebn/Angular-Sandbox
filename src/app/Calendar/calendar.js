angular.module('sandbox').controller('Calendar', function(calendarService){
	this.today = moment();
	this.mode = 'month'

	this.selectedDate = moment();
	
	this.days = calendarService.getMonth(this.selectedYear, this.selectedMonth);
	this.selectMonth = function(month){
		if(month < 0) {
			month = 11;
			year--;
			this.selectedDate.year(year);
		}
		if(month > 11){
			month = 0;
			year++;
			this.selectedDate.year(year);
		}
		
		this.selectedDate().month(month);
		this.days = calendarService.getMonth(this.selectedYear, this.selectedMonth);
	}
	


	
});
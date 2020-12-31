const leapYears = function(year) {

//if divisble by 100 and not divisble by 400 = not leap year
//if divisble by 4 and 400 = leap year
//if divisble by 4 = leap year
//else not a leap year

	if (year % 100 == 0 && year % 400 !==0) {
		return false;
	} else if (year % 4 == 0 && year % 400 == 0) {
		return true;
	} else if (year % 4 == 0) {
		return true
	} else {
		return false;
	}



}

module.exports = leapYears

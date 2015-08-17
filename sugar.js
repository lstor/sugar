var daysBetween = function (from, to) {
  var one_day_in_ms = 1000 * 3600 * 24;
  return Math.ceil((to.getTime() - from.getTime())/one_day_in_ms) ;
}

var daysSince = function(day, month, year) {
  var today = new Date();
  // subtract 1 to allow 1-based months (jan=1, feb=2, etc.)
  return daysBetween(new Date(year, month - 1, day), today);
}

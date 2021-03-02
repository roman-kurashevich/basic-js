const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!(date)) return 'Unable to determine the time of year!'
  if ( Object.prototype.toString.call(date) != '[object Date]') throw new Error('THROWN')
  else {

    date.setFullYear(2000, date.getMonth(), date.getDay())
    let month = date.getMonth()
    let day = date.getDay()
    let season = ''
    // if (date.getFullYear() < 1970) {date.setFullYear(1970)}
    if ((month >= 0 && month <= 1) || (month == 11)) season = 'winter';
    else {
      if (month >= 2 && month <= 4) season = 'spring';
      else {
        if (month >= 5 && month <= 7) season = 'summer';
        else {
          if (month >= 8 && month <= 11) season = 'autumn';
          else {
            
          }
      
       }
      }
    }

  }
  // remove line with error and write your code here
};

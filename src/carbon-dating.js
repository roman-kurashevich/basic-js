const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // if (!(typeof(sampleActivity) == string)) return false;
  if (typeof(sampleActivity) == String) {
    numActivity = Number(sampleActivity);
    if (numActivity && (numActivity > 0)) {
      numActivity = Math.ceil(Number(sampleActivity))
      let k = 0.693/HALF_LIFE_PERIOD;
      let t = Math.log2(MODERN_ACTIVITY/numActivity) / k;
      return t
    } else return false
  } else return false

};

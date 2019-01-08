// Constructor
function Chronometer() {
  this.intervalId = '';
  this.timeStartedAt = 0;
}

Chronometer.prototype.startClick = function () {
  if (this.timeStartedAt == 0) {
    this.timeStartedAt = new Date();
  }
  var that = this;
  this.intervalId = setInterval(function () {
    that.setTime();
  }, 10);
};

Chronometer.prototype.getMinutes = function () {
  return Math.floor((new Date() - this.timeStartedAt)/(1000*60));
};

Chronometer.prototype.getSeconds = function (minutes) {
  return Math.floor((new Date() - this.timeStartedAt)/(1000)-(minutes*60));
};

Chronometer.prototype.getMilliseconds = function (minutes, seconds) {
  return Math.floor((new Date() - this.timeStartedAt)-((minutes*60*1000)+(seconds*1000)));
};

Chronometer.prototype.twoDigitsNumber = function (value) {
  return ('0' + value).slice(-2);
};

Chronometer.prototype.setTime = function () {
  var minutes = this.twoDigitsNumber(this.getMinutes());
  var seconds = this.twoDigitsNumber(this.getSeconds(minutes));
  var miliseconds = this.twoDigitsNumber(this.getMilliseconds(minutes, seconds))
  printTime(minutes, seconds);
  printMilliseconds(miliseconds);
};


Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
  this.timeStartedAt = 0;
  printTime("00","00");
  printMilliseconds("00");
  clearSplits();
};

Chronometer.prototype.splitClick = function () {
  var minutes = this.twoDigitsNumber(this.getMinutes());
  var seconds = this.twoDigitsNumber(this.getSeconds(minutes));
  var miliseconds = this.twoDigitsNumber(this.getMilliseconds(minutes, seconds))
  printSplit(minutes, seconds, miliseconds);
};

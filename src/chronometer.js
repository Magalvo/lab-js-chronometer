class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    let getMinutes = this.currentTime / 60;
    return Math.floor(getMinutes);
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    let sec = this.currentTime % 60;
    return Math.floor(sec);
  }

  computeTwoDigitNumber(value) {
    let newValue = value.toString();
    if (newValue.length === 1) {
      return '0' + value;
    }
    return newValue;
  }

  //computeTwoDigitNumber(value){
  //  return `0${value}`.slice(-2);
  //}
  //

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    // ... your code goes here

    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

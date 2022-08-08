let commands = [
  'create',
  'setTime 9 10 0',
  'tickSeconds 3659',
  'getTime',
  'tickSeconds 3759',
  'setTime 9 10 0',
  'create',
  'getTime'
]

// commands = ["create","setTime 10 10 10","tickSeconds 1800","getTime"]

class Clock {
  constructor() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  setTime(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  tickSeconds(seconds) {
    // console.log(seconds);
    let minutes = Math.floor(seconds / 60);
    this.seconds += (seconds % 60);
    if (this.seconds >= 60) {
      this.seconds -= 60;
      this.minutes += 1;
    }
    let hours = Math.floor(minutes / 60);
    this.minutes += (minutes % 60);
    if (this.minutes >= 60) {
      this.minutes -= 60;
      this.hours += 1;
    }
    this.hours += hours;
    while (this.hours >= 12) {
      this.hours -= 12;
    }
  }

  getTime() {
    let hours = this.hours.toString()
    let minutes = this.minutes.toString()
    let seconds = this.seconds.toString();
    if (this.hours < 10) hours = '0' + hours;
    if (this.minutes < 10) minutes = '0' + minutes;
    if (this.seconds < 10) seconds = '0' + seconds;
    return hours + ':' + minutes + ':' + seconds;
  }
}


function solve( commands ) {
  let ret = [];
  let clock;

  for (const cmd of commands) {
    const parts = cmd.split(' ');
    const action = parts[0];
    const params = [];
    // console.log(cmd);
    for (let i = 1; i <= commands.length; ++i) {
      params.push(parseInt(parts[i], 10));
    }

    if (action === 'create') {
      clock = new Clock();
    } else if (action === 'getTime') {
      ret.push(clock.getTime());
    } else if (action === 'setTime') {
      clock.setTime(params[0], params[1], params[2])
    } else if (action === 'tickSeconds') {
      clock.tickSeconds(params[0])
    }
  }
  return ret;
}

console.log(solve(commands));

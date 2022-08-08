const commands = [
  'create',
  'setTime 9 10 0',
  'tickSeconds 3600',
  'getTime'
]

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
    console.log(seconds);
    let minutes = seconds / 60;
    this.seconds += (seconds % 60);
    if (this.seconds >= 60) {
      this.seconds -= 60;
      this.minutes += 1;
    }
    let hours = minutes / 60;
    this.minutes += (minutes % 60);
    if (this.minutes >= 60) {
      this.minutes -= 60;
      this.hours += 1;
    }
    this.hours += hours;
    if (this.hours > 12) {
      this.hours -= 12;
    }
  }

  getTime() {
    if (this.hours < 10) this.hours = '0' + this.hours;
    if (this.minutes < 10) this.minutes = '0' + this.minutes;
    if (this.seconds < 10) this.seconds = '0' + this.seconds;
    return this.hours + ':' + this.minutes + ':' + this.seconds;
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

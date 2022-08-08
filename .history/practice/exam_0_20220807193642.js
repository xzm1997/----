const commands = [
  'create',
  'setTime 9 10 0',
  'getTime',
  'tickSeconds 3600'
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

  }

  getTime() {
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
    for (let i = 1; i < commands.length; ++i) {
      params.push(parseInt(parts[i], 10));
    }

    if (action === 'create') {
      clock = new Clock();
    } else if (action === 'getTime') {
      ret.push(clock.getTime());
    } else if (action === 'setTime') {
      clock.setTime(params[0], params[1], params[2])
    } else if (action === 'tickSeconds') {
      clock.setTime(params[0])
    }
  }
  return ret;
}

console.log(solve(commands));

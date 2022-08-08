const commands = [
  'create',
  'setTime 9 10 0',
  'getTime',
  'tickSeconds 3600'
]

class Clock {
  constructor() {
    let hours = 0, minutes = 0, seconds = 0;
  }

  setTime(hours, minutes, seconds) {

  }

  tickSeconds(seconds) {

  }
  getTime() {

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

solve(commands);

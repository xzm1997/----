const commands = [
  'create',
  'setTime 9 10 0',
  'getTime',
  'tickSeconds 3600'
]

class Clock {
  constructor() {

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
    }
  }
}

solve(commands);

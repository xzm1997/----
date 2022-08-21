function winMazeGift( maze ) {
  // write code here
  let res = [];
  // find entry
  let entry = [];
  for (let i = 0; i < maze.length; ++i) {
    if (maze[0][i] === 0) {
      let temp = [0, maze[0][i]];
      entry.push(temp);
    }
  }
  for (let i = 0; i < maze[0].length; ++i) {
    if (maze[i][0] === 0) {
      let temp = [maze[0][i], 0];
      entry.push(temp);
    }
  }
}

let valReg = /[a-zA-z\s]+/;
console.log(!valReg.test('a'));

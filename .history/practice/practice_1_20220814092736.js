function listToTree(nodeList) {
  const findChild = function(currentID) {
    let childrenList = []
    for (let item of nodeList) {
      if (item.pid === currentID) {
        let temp = {}
        if (item.pid === currentID) {
          temp.id = item.id;
          temp.name = item.name;
          childrenList.push(item.id);
          temp.children = findChild(item.id);
        }
        res.push(temp);
      }
    }
    return childrenList;
  }
  let res = []
  findChild(0);
}


let input = [
  {id: 1, name: 'name1', pid: 0},
  {id: 2, name: 'name2', pid: 1},
  {id: 3, name: 'name3', pid: 1},
  {id: 4, name: 'name4', pid: 2},
  {id: 5, name: 'name5', pid: 3},
  {id: 6, name: 'name6', pid: 5},
  {id: 7, name: 'name7', pid: 0},
  {id: 8, name: 'name8', pid: 7},
  {id: 9, name: 'name9', pid: 7},
  {id: 10, name: 'name10', pid: 9},
]

listToTree(input);

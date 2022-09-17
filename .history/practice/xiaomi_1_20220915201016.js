// function pull(array, ...values) {
//   for (let i = array.length-1; i >= 0; --i) {
//     if (values.indexOf(array[i]) !== -1) {
//       array.splice(i, 1);
//     }
//   }
//   console.log(array)
// }

// let array = ['a', 'b', 0, 'a', 'b', 'c', true]
// pull(array, 'a', 0)

// console.log(array)


class EventEmmiter {
  constructor() {
    this.cache = {}
  }
  on(name, func) {
    if (this.cache[name]) {
      this.cache[name].push(func)
    } else {
      this.cache[name] = [func]
    }
  }
  off(name, func) {
    const tasks = this.cache[name]
    if (tasks) {
      let index = tasks.findIndex((value, index) => value === func)
      if (index >= 0) {
        tasks.splice(index, 1)
      }
    }
  }
  emit(name) {
    let tasks = this.cache[name]
    tasks.forEach(fn => fn())
  }
}

let events = new EventEmmiter()
const task1 = () => {
  console.log('task1')
}
const task2 = () => {
  console.log('task2')
}
events.on('task1', task1)
events.on('task2', task2)

setTimeout(() => {
  events.emit('task1')
},2000)

events.off('task1', task1)

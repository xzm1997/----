// class EventEmitter {
//   constructor() {
//     this.events = {};
//   }






  
//   //触发，传递参数
//   emit(event, ...args) {
//     const cbs = this.events[event];
//     // 因为下方off会将this.events[event]重新赋值为null，所以需要判断一下
//     if (!cbs) {
//       console.log('没有当前事件');
//       return this;
//     }

//     //遍历执行所有回调
//     cbs.forEach((cb) => {
//       cb(...args)
//     });

//     // 为了可以链式调用
//     return this;
//   }

//   //监听，执行回调
//   on(event, cb) {
//     //如果events里面没有事件监听，那么就初始化为一个数组
//     //为什么是数组，因为一个事件可能有多个监听，你触发一次，多个监听都会执行
//     if (!this.events[event]) {
//       this.events[event] = [];
//     }
//     this.events[event].push(cb);
//     return this;
//   }

//   //移除监听回调
//   // 应该是借助on实现的
//   off(event, cb) {
//     //注册一个方法，只执行一次，执行完成后直接注销掉
//     const func = (...args) => {
//       //先把事件监听移除掉，再去执行cb
//       this.off(event, func);
//       cb(...args);
//     };
//     this.on(event, func);
//     return this;
//   }

//   // 只监听一次，执行回调
//   // cb => 回调函数callback
//   once(event, cb) {
//     //如果没有cb，那就意味着移除所有监听
//     //有的话，那就去除这个毁掉
//     if (!cb) {
//       this.events[event] = null;
//     } else {
//       this.events[event] = this.events[event].filter(
//           (it) => it !== cb
//       );
//     }
//     return this;
//   }
// }



arr1 = [1,2,3]
arr2 = [...arr1]

// setInterval(() => {
//   console.log(1)
// },1000)

function mySetInterval(){
  setTimeout(() => {
    console.log(2)
    mySetInterval();
  },1000)
}

mySetInterval()

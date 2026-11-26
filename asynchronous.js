//synchronous
// console.log("Task one")
// console.log("Task two")
// console.log("Task three")
// console.log("Task four")
// console.log("Task five")

//asynchronous
//before you run the code ask the students , the order of how this code will  run
// console.log("Start")
// setTimeout(() => {
//     console.log("Done")
// },3000)

// console.log("end")

// //callback function
// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("Data has been fetched")
//     callback()
//     }, 5000)
// }
// //processData will not be called untill fetchData completes its task which takes time
// function processData() {
//     console.log("Data has been processed")
// }
// /*
// The () is not added when calling processData because it will run immediately without waiting the call back fun
// and will give error
// */
// fetchData(processData)

// function independentFun() {
//     console.log("This is the first to run")
// }

// independentFun()

//2nd Example: Ordering Food

function orderingFood() {
  console.log("Ordered fast Food");
}

function proceesingFood(callback) {
  setTimeout(() => {
    console.log("Food is in process");
    callback();
  }, 3000);
}

function waitFood() {
  //     setTimeout(() => {

  //    }, 5000)
  console.log("waiting Food");
}

function eatFood() {
  setTimeout(() => {
    console.log("Eating Food");
  }, 5000);
}

orderingFood();
proceesingFood(waitFood);
eatFood();

//arrow function

proceesingFood(() => {
  console.log("waiting Food");
});

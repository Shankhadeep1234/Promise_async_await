//first example for promise from webDev simplified
// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a === 2) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

// p.then((message) => {
//   console.log(`This is in the then ${message}`);
// })
//   .catch((message) => {
//     console.log(`This is in the catch ${message}`);
//   })
//   .finally(() => {
//     console.log(`This is in the finally block and will always run`);
//   });

//-------------------------------------------------------------------------------------------------

//another example for webDev simplified on promise.all

/**
 * This returned promise will resolve when all of the input's promises have resolved, or
 * if the input iterable contains no promises. It rejects immediately upon any of the input
 * promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.
 */
// const recordVideoOne = new Promise((resolve, reject) => {
//   resolve("Video 1 recorded");
// });

// const recordVideoTwo = new Promise((resolve, reject) => {
//   resolve("Video 2 recorded");
// });

// const recordVideoThree = new Promise((resolve, reject) => {
//   resolve("Video 3 recorded");
// });

// Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
//   (messages) => {
//     console.log(messages);
//   }
// );

//----------------------------------------------------------------------------------------------------

//another example for webDev simplified on promise.race
/**
 * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.
 * It will return when the 1st one is completed instead of everything to complete, because of that it will return a single msg
 */
const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 recorded");
});

Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (message) => {
    console.log(message);
  }
);

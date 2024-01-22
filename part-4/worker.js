//creates event handler
onmessage = function (message) {
  let count = 0;
  for (let i = 0; i < 10000; i++) {
    count += 1;

    //sends message back to the main thread
    postMessage(count)
  }
  console.log(message);
};

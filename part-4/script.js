//worker allows the webpage to run more resourcce-intensive tasks. their functions will run in the background not affecting the resources of the main file.
//they dont have access to DOM manipulation. 
//the codes will run as soon the worker Constructor is called

//how to create a new worker
const worker = new Worker("worker_file.js");

//async function can be added to the Worker file like setTimeout and fetch API

//workers use the postMessage method to send a message back to the html file.


//the worker will receive a message containing the word from command and quota properties
document.querySelector("#generate").addEventListener("click", () => {
    const quota = document.querySelector("#quota").value;
    worker.postMessage({
      command: "generate",
      quota,
    });
  });

  //a message event handler will be used to let the worker send us the data once it has finished.
  worker.addEventListener("message", (message) => {
    document.querySelector("#output").textContent =
      `Finished generating ${message.data} primes!`;
  });

  //other types of workers are called Shared and Service Workers.

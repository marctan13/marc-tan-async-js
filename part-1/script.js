// asynchronous Javascript gives us an advantage that lets webpages run faster than regular synchronous Javascript would do.
// It lets the code run without waiting for the other code to finish first.
// Having synchronous javascript can make then webpage load slower or has a chance to become unresponsive while it waits for
// a part of code to finish.
//Async Javascript does not depend on other codes to run.
//Event handlers are considered as asynchronous functions

const factEl = document.getElementById("fact");
const factBtn = document.getElementById("fact-btn");

factBtn.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();

  //attaching an event listener to the request and performs the functions once the event is fulfilled
  xhr.addEventListener("loadend", () => {
    //once fulfilled, the below statement will run
    factEl.textContent = `Finished with Status ${xhr.status}`;
    console.log("Hello");
  });

  //will try to fetch api
  xhr.open("GET", "https://api.api-ninjas.com/v1/facts?limit=1");

  //sends the request
  xhr.send();
});


// ----------
// const MAX_PRIME = 1000000;

// function isPrime(n) {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return n > 1;
// }

// const random = (max) => Math.floor(Math.random() * max);

// function generatePrimes(quota) {
//   const primes = [];
//   while (primes.length < quota) {
//     const candidate = random(MAX_PRIME);
//     if (isPrime(candidate)) {
//       primes.push(candidate);
//     }
//   }
//   return primes;
// }

// const quota = document.querySelector("#quota");
// const output = document.querySelector("#output");

// document.querySelector("#generate").addEventListener("click", () => {
//   const primes = generatePrimes(quota.value);
//   output.textContent = `Finished generating ${quota.value} primes!`;
// });

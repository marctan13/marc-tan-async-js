// asynchronous Javascript gives us an advantage that lets webpages run faster than regular synchronous Javascript would do.
// It lets the code run without waiting for the other code to finish first.
// Having synchronous javascript can make then webpage load slower or has a chance to become unresponsive while it waits for
// a part of code to finish.
//Async Javascript does not depend on other codes to run.
//Event handlers are considered as asynchronous functions and a callback
//callbacks are functions that are called within another function

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
  xhr.open("GET", "https://api.api-ninjas.com/v1/facts?limit=1",);

  //sends the request
  xhr.send()
}
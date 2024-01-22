const worker = new Worker('worker.js')
const countButton = document.getElementById("count");
const bgButton = document.getElementById("bg")

countButton.addEventListener("click", (event) => {
    // let count = 0;
    // for (let i = 0; i < 100000000; i++){
    //     count += 1;

    //     alert('Counted to' + count)
    // }

    //passes data to worker
    worker.postMessage("hello worker")
})

//what the worker will bring back to the main thread
worker.onmessage = function(message){
    console.log(message)  //returns a message event
    // alert(`The final count is ${message.data}`)
}

bgButton.addEventListener("click", event => {
    if(document.body.style.background !== "yellow"){
        document.body.style.background = 'yellow'
    } else {
        document.body.style.background = 'blue';
    }
})
//setTimeout is an asyc function that accepts a function and takes in a second parameter how long before it call that function in milliseconds
//setTimeout can be nested inside a Promise constructor which accepts a function executor

function samplePromise(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(condition){
                resolve("Promise success")
            } else{
                reject("Promise failed")
            }
        }, 5000) //5 seconds
    })
}
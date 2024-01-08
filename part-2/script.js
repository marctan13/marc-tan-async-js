//the fetch() is a more modern approach to get the api replacing the XMLHttpRequest
//once called, the site will be in a promise state where it is fetching the data from the link or json file. then once
// it has been received, a function will be called using then(). If the request failed, the catch() will be called

//fetches api or json file and stores it in a variable. Returns an object
//a promise can be 1 in 3 states: pending, fulfilled, and rejected.
  
    //with error
    const fetchPromise = fetch(
        //success
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
        //fail
        //"bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
      );
      console.log(fetchPromise)

      fetchPromise.then((response) => {
        console.log("response successful");
      })
      .catch((error) =>{
        console.log("Failed Request")
      })

      //does not wait for request to finish
      console.log("Pending request")




        //with Promise.all()
        const fetchPromise1 = fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
          );
          const fetchPromise2 = fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
          );
          const fetchPromise3 = fetch(
            "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
          );
          
          Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
            .then((responses) => {
              for (const response of responses) {
                console.log(`${response.url}: ${response.status}`);
              }
            })
            .catch((error) => {
              console.error(`Failed to fetch: ${error}`);
            });
          
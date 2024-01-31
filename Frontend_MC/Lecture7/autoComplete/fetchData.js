

let currentFetchController = null;

 async function getCountries(keyword){

    try{

        //some previous request is in flight
        if(currentFetchController!==null){
            console.log("cancelling the ongoing fetch request");
            //cancel the previous 
            currentFetchController.abort();
        }

    let abortController  = new AbortController();

    //assinging a new controller to currentFetchController
    currentFetchController  = abortController;


    const rawResponse =  await fetch(`https://restcountries.com/v3.1/name/${keyword}`,{
    signal:abortController.signal
    });

      // i have recieved the response
      currentFetchController= null;


    const response = await rawResponse.json();


    if(rawResponse.status===200){
        return response;
    }

    if(rawResponse.status===404){
        console.log("Page not found");
        return [];
    }

    return [];

   }

   catch(err){
    console.log("Fetched error ",err.message);
   }

}


export default getCountries;
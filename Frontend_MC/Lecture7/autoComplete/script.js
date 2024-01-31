

const inputBox = document.querySelector(".searchInput");

inputBox.addEventListener("input", debounce(handleSuggestions));

async function handleSuggestions(e){

    const keyword = e.target.value;
    console.log(keyword);

    const suggestions  = await getSuggestions(keyword);

    populateSuggestionBox(suggestions);
}


function populateSuggestionBox(suggestions){

    const suggestionBox= document.querySelector(".suggestionBox");

    suggestionBox.innerHTML="";


    if(!suggestions.length){
        return;
    }

    suggestionBox.classList.add("visible");


    const fragment = document.createDocumentFragment();


    suggestions.forEach((countryName)=>{

        const li = document.createElement("li");
        li.innerText = countryName;
        fragment.appendChild(li);

    })

    suggestionBox.appendChild(fragment);

}




async function getSuggestions(keyword){

     const countriesData = await getCountries(keyword);

     const countryNames  = countriesData.map((country)=> country.name.common);

     return countryNames;
     

}



function debounce(fnToMakeNetworkCall, delay=0){

    let timerId=null;

    return function(e){

        console.log("a user has entered ",e.target.value);

        if(timerId){
            console.log("clearning the previous timer");
            clearTimeout(timerId);
        }


        console.log("starting the timer");


        timerId = setTimeout(()=>{
            fnToMakeNetworkCall(e);
            timerId=null;
        },delay)

    }


}



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


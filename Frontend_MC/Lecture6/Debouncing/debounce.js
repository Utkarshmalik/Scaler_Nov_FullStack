const input = document.querySelector("input");

function debounce(fnToMakeNetworkCall, delay=500){

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



const debouncedInputChange =  debounce(makeANetworkCall);



input.addEventListener("input", debouncedInputChange);


function makeANetworkCall(e){
    console.log("making a network call with input ", e.target.value);
}
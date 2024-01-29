const button = document.querySelector("button");


function throatle(fnToMakeNetworkCall, interval=500){

    let intervalInProgress= false;

    return function(e){

        console.log("Button is clicked");

        if(intervalInProgress){
            console.log("Return , as interval is still in progress");
            return;
        }

        intervalInProgress = true;
        fnToMakeNetworkCall(e);

        setTimeout(()=>{
            intervalInProgress = false
        },interval)
    }
}



const throatledButtonClick = throatle(makeANetworkCall);


button.addEventListener("click",throatledButtonClick);



function makeANetworkCall(e){
    console.log("making a network call with input ", e.target.value);
}
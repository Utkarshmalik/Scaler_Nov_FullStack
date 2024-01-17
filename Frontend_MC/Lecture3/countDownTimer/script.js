const startButton = document.querySelector("#start");
const hrInput = document.querySelector("#hr");
const minuteInput = document.querySelector("#minute");
const secondInput = document.querySelector("#second");


startButton.addEventListener("click",()=>{

    //get the value of the input fields 

    const hrs=  parseInt(hrInput.value) || 0;
    const minutes=  parseInt(minuteInput.value) || 0;
    const seconds=  parseInt(secondInput.value) || 0;

    console.log( hrs);
    console.log( minutes);
    console.log( seconds);

    const [transformedSecs, transformedMins, transformedHours] = transformInputs(seconds,minutes,hrs);


    //transform 


    // start the timer with those values 

    let countDownTime  = transformedSecs + transformedMins * 60 + transformedHours * 60 * 60;

    timer(countDownTime);

})

function timer(countDownTime){

    // setTimeout 

    //decrement the timer 


    //update the UI in evert 1 second 
}




function transformInputs(secs,mins,hrs){

    //write logic for transformation here

    return [secs, mins, hrs];

}
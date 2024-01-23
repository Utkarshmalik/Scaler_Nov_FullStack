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

    // start the timer with those values (Total seconds we have to count)

    let countDownTime  = seconds + minutes * 60 + hrs * 60 * 60;

    timer(countDownTime);

})

function timer(countDownTimer){

    if(countDownTimer===0){
        return;
    }

    countDownTimer--;
    updateUIWithTimerValues(countDownTimer);

    setTimeout(()=>{
        timer(countDownTimer);
    },1000)
    
}



function updateUIWithTimerValues(countDownTime){

     let hrs = Math.floor(countDownTime / 3600);
     let mins= Math.floor( (countDownTime%3600) / 60);
     let secs = Math.floor(countDownTime % 60);

     hrInput.value = hrs;
     minuteInput.value = mins;
     secondInput.value = secs;
}
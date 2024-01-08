
//create polyfill of setInterval with the help setTimeout


function mySetInterval(cb,delay){

    let timerId  =  {flag:true};

    function fn(){ 
        if(timerId.flag===true){
            cb();
            setTimeout(fn, delay);
        }
    }

    setTimeout(fn,delay);
    return timerId;

}

function myClearInterval(timerId){
    timerId.flag=false;
}



function cb() {
    console.log("I will be called on every interval")
}

let timerId = mySetInterval(cb,1000);

setTimeout(()=>{
myClearInterval(timerId);
},5100);



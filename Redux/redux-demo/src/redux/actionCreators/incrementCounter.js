import { useDispatch } from "react-redux";



export const incrementCounter= ()=>{

    return function(dispatch){

        console.log(typeof dispatch);

        //write some condition 

        const number= getRandomIntInclusive(1,10000);
        console.log(number);



        // if(number%2!==0){
        //             dispatch({
        //     type:"INCREMENT_COUNTER"
        // })
        // }


        setTimeout(()=>{
            dispatch({
            type:"INCREMENT_COUNTER"
        }) 
        },2000)

       
    
      
    }
}


function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
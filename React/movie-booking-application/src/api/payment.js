


const BASE_URL = process.env.REACT_APP_BACKEND_URL


export const createPayment = async (bookingId,  paymentRequest)=>{

    const token = localStorage.getItem("token");


    const paymentPromise =  await fetch(`${BASE_URL}/mba/api/v1/bookings/${bookingId}/payments`,{
        method:"POST",
        body:JSON.stringify(paymentRequest),
        headers:{
            "x-access-token":token,
            "Content-Type":"application/json"
        }
    });

    const paymentRes = await paymentPromise.json();
    return paymentRes;
}


const BASE_URL = process.env.REACT_APP_BACKEND_URL


export const createBooking = async (bookingRequest)=>{

    const token = localStorage.getItem("token");


    const bookingsPromise =  await fetch(`${BASE_URL}/mba/api/v1/bookings`,{
        method:"POST",
        body:JSON.stringify(bookingRequest),
        headers:{
            "x-access-token":token,
            "Content-Type":"application/json"
        }
    });

    const bookingsData = await bookingsPromise.json();
    return bookingsData;
}


export const getBookingDetails = async (id)=>{

    const token = localStorage.getItem("token");


    const bookingPromise =  await fetch(`${BASE_URL}/mba/api/v1/bookings/${id}`,{
        headers:{
            "x-access-token":token
        }
    });

    const bookingData = await bookingPromise.json();
    return bookingData;
}
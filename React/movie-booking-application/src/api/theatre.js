

const BASE_URL = process.env.REACT_APP_BACKEND_URL


export const getAllTheatres = async ()=>{

    const token = localStorage.getItem("token");


    const theatresPromise =  await fetch(`${BASE_URL}/mba/api/v1/theatres`,{
        headers:{
            "x-access-token":token
        }
    });

    const theatresData = await theatresPromise.json();
    return theatresData;
}

export const getTheatresForAMovie = async (movieId)=>{

    const theatres= await getAllTheatres();

    const theatresRunning = theatres.filter((theatre)=>{

        if(theatre.movies){
            const movieIds = theatre.movies.map((movie)=>movie._id);
            return movieIds.includes(movieId);
        }
    })

    return theatresRunning;

}

export const getTheatreDetails = async (id)=>{

    const token = localStorage.getItem("token");


    const theatresPromise=  await fetch(`${BASE_URL}/mba/api/v1/theatres/${id}`,{
        headers:{
            "x-access-token":token
        }
    });

    const theatreData = await theatresPromise.json();
    return theatreData;
}
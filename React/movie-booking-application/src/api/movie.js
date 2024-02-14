

const BASE_URL = process.env.REACT_APP_BACKEND_URL

export const getAllMovie = async ()=>{
    const moviePromise=  await fetch(`${BASE_URL}/mba/api/v1/movies`);
    const movieData = await moviePromise.json();
    return movieData;
}


export const getMovieDetails = async (id)=>{

    const token = localStorage.getItem("token");


    const moviePromise=  await fetch(`${BASE_URL}/mba/api/v1/movies/${id}`,{
        headers:{
            "x-access-token":token
        }
    });

    const movieData = await moviePromise.json();
    return movieData;
}
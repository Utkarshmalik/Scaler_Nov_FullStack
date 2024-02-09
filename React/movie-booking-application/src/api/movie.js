


export const getAllMovie = async ()=>{
    const moviePromise=  await fetch("https://movie-booking-application.onrender.com/mba/api/v1/movies");
    const movieData = await moviePromise.json();
    return movieData;
}


export const getMovieDetails = async (id)=>{
    const moviePromise=  await fetch(`https://movie-booking-application.onrender.com/mba/api/v1/movies/${id}`);
    const movieData = await moviePromise.json();
    return movieData;
}
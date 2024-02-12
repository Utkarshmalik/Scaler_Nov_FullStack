import { useParams } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import NavbarComp from "../../Components/Navbar";
import Loader from "../../Components/common/Spinner";
import { getMovieDetails } from "../../api/movie";
import ReactPlayer from "react-player";


function MovieDetails(){

    const params = useParams();
    const movieId = params.movieId;

    const [isLoading, setIsLoading] = useState(true);
    const [movieData, setMovieData] =useState(null);


    const fetchMovieDetails= async ()=>{

        const movieData= await getMovieDetails(movieId);
        console.log(movieData);
        setIsLoading(false);
        setMovieData(movieData);
    }

    useEffect(()=>{
        fetchMovieDetails();
    },[]);



    return <div>
        <NavbarComp/>

        {

            (isLoading) ? <Loader/> :  <div>

                 <div className="movieDetailBox  bg-black" >

                    <ReactPlayer url={movieData.trailerUrl} controls={true} width="80%" height="80%"/>

                </div>

                <div>

                    <h2 className="fw-bolder"> About The Movie </h2>

                    
                     <div>
                        <span className="badge rounded-pill text-bg-danger m-1"> {movieData.description}  </span>
                        <span className="badge rounded-pill text-bg-secondary m-1"> {movieData.language}  </span>
                        <span className="badge rounded-pill text-bg-secondary m-1"> {movieData.releaseStatus}  </span>

                    </div>   

                    <hr/>

                    <div className="d-flex flex-column m-5">


                    <h2> {movieData.name} </h2>
                    <h5> {movieData.director} </h5>

                     <hr/>

                    <h5> Cast </h5>

                    {
                         movieData.cast &&  movieData.cast.map(name=>{
                            return <li className="list-group-item"> {name} </li>
                        })
                    }

                    </div>

                   


                 </div>   

                </div>


        }



    </div>
}


export default MovieDetails;
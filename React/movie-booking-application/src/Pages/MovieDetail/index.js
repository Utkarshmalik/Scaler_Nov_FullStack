import {  Link, useParams } from "react-router-dom";
import "./style.css";
import { useContext, useEffect, useState } from "react";
import NavbarComp from "../../Components/Navbar";
import Loader from "../../Components/common/Spinner";
import { getMovieDetails } from "../../api/movie";
import ReactPlayer from "react-player";
import { ThemeContext } from "../../App";
import Button from "react-bootstrap/esm/Button";


function MovieDetails(){

        const themeContextValue = useContext(ThemeContext);
        const isLightTheme = themeContextValue.theme==="light";

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



    return <div className={(isLightTheme)?"bg-light text-dark":"bg-dark text-light"}>
        <NavbarComp/>

        {

            (isLoading) ? <Loader/> :  <div>

                 <div className={(isLightTheme)?"movieDetailBox bg-light":"movieDetailBox bg-dark"} >

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


                 
                       <Button variant="danger" className="text-light m-5 p-2">
                        <Link to={`/buyTickets/${movieId}`}>                     
                        Book Tickets
                         </Link>
                      </Button>

                   


                 </div>   

                </div>


        }



    </div>
}


export default MovieDetails;
import { useEffect, useState } from "react";
import "./style.css";
import NavbarComp from "../../Components/Navbar";
import Loader from "../../Components/common/Spinner";
import Movie from "../../Components/Movie";
import { getAllMovie } from "../../api/movie";


function LandingPage(){

    console.log("inside landing page");

    //fetching the movies first and then return UI
    const [isLoading, setIsLoading] = useState(true);
    const [movieDetails, setMovieDetails] = useState([]);

    const fetchMovieData= async ()=>{
          const movieData= await getAllMovie();
           console.log(movieData);
           setIsLoading(false);
            setMovieDetails(movieData);
    }


    //ComponentDidMount: after the initial render 
    //ComponentDidUpdate: after every re-render 
    useEffect(()=>{
        console.log("use effect called");
        console.log("make a network call to fetch the data");

        fetchMovieData();

    },[]) // Empty dependency array to run only once (after the inital render)


    console.log("returning some UI");

    return <div>

        <NavbarComp/>

        {
            (isLoading) ? <Loader/> : <div className="movieList" >

                {

                    movieDetails.map((movie)=>{
                        return <Movie movieDetails={movie} />
                    })
                }

                </div>
        }


    </div>
}


export default LandingPage;
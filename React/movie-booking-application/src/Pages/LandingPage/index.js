import { useContext, useEffect, useState } from "react";
import "./style.css";
import NavbarComp from "../../Components/Navbar";
import Loader from "../../Components/common/Spinner";
import Movie from "../../Components/Movie";
import { getAllMovie } from "../../api/movie";
import { ThemeContext } from "../../App";



let allMovieData=[];

function LandingPage(){

     const themeContextValue = useContext(ThemeContext);

     console.log(themeContextValue);
    

    console.log("inside landing page");

    //fetching the movies first and then return UI
    const [isLoading, setIsLoading] = useState(true);
    const [movieDetails, setMovieDetails] = useState([]);
    const [searchValue, setSearchValue]= useState("");

    const fetchMovieData= async ()=>{
          const movieData= await getAllMovie();
           console.log(movieData);
           setIsLoading(false);
            setMovieDetails(movieData);
            allMovieData = movieData;
    }


    //ComponentDidMount: after the initial render 
    //ComponentDidUpdate: after every re-render 
    useEffect(()=>{
        console.log("use effect called");
        console.log("make a network call to fetch the data");

        fetchMovieData();

    },[]) // Empty dependency array to run only once (after the inital render)


    useEffect(()=>{

        filterMovies();
        
    },[searchValue])


    const onSearchChange=(e)=>{
        setSearchValue(e.target.value);
    }

    const filterMovies = ()=>{

        console.log(allMovieData);

        if(!allMovieData.length){
            return;
        }

        const newMovies = allMovieData.filter((movie=>{
            return movie.name.toLowerCase().startsWith(searchValue.toLowerCase());
        }))


        setMovieDetails(newMovies);
    }

    console.log("returning some UI");

    return <div>

        <NavbarComp/>

        <div className="searchBox">


                  <form>

              <input value={searchValue} onInput={onSearchChange} type="text" placeholder="Search Movie"/>

              </form>


        </div>

  


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
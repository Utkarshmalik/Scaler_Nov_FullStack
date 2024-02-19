import { useParams } from "react-router-dom";
import NavbarComp from "../../Components/Navbar";
import "./style.css";
import { useEffect, useState } from "react";
import Loader from "../../Components/common/Spinner";
import { getAllTheatres, getTheatresForAMovie } from "../../api/theatre";
import TheatreDetail from "../../Components/TheatreDetail/TheatreDetail";


function MovieTheares(){

    const {movieId:selectedMovie } = useParams();

    const [theatreDetails, setTheatreDetails] = useState(null);
    const [isLoading, setIsLoading] =  useState(true);

    const init = async ()=>{

        const theatres = await getTheatresForAMovie(selectedMovie);

        setTheatreDetails(theatres);
        setIsLoading(false);
    }


    useEffect(()=>{
        init()
    })



    console.log(selectedMovie);


    return <div>

        <NavbarComp/>

        {isLoading && <Loader/>}

        { 
         
            !isLoading && 

            <div>

                {

                    theatreDetails.map((theatre)=>  <TheatreDetail theatre={theatre} movieId={selectedMovie} />  )
                }

            </div>    


        }






    </div>
}


export default MovieTheares;
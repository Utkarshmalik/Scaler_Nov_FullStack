import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../api/movie";
import { getTheatreDetails } from "../../api/theatre";
import NavbarComp from "../../Components/Navbar";
import Loader from "../../Components/common/Spinner";
import Cinema from "../../Components/Cinema/Cinema";
import { Button } from "react-bootstrap";


function Bookings(){

    const {movieId, theatreId} = useParams();

    const [movieDetails, setMovieDetails]= useState(null);
    const [theatreDetails, setTheatreDetails]= useState(null);
    const [isLoading, setIsLoading] =  useState(true);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const init = async ()=>{

        await Promise.all([fetchMovieDetails(), fetchTheatreDetails()]);
        setIsLoading(false);
    }

    const fetchTheatreDetails =  async ()=>{

        const theatresData= await getTheatreDetails(theatreId);
        setTheatreDetails(theatresData);

    }


    const fetchMovieDetails =  async ()=>{

        const movieData= await getMovieDetails(movieId);
        setMovieDetails(movieData);
    }


    useEffect(()=>{
        init();
    },[])



    console.log(movieId, theatreId);


    return <div className="text-center bg-black vh-100 text-light fullView"> 

       {/* <NavbarComp/> */}

       {isLoading && <Loader/>}

       {!isLoading && <div>

        <div fullView>
            <h2 className="fw-bold"> {movieDetails.name}  </h2>
        </div>


        <ShowCase/>


        <Cinema movieDetails={movieDetails} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/>

        
        <Button disabled={selectedSeats.length===0} variant="success" size="lg" >
        Proceed to Payment
        </Button>
    

        </div>

   
        }


    </div>
}


function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>N/A</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  )
}


export default Bookings;
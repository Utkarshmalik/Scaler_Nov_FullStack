import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../api/movie";
import { getTheatreDetails } from "../../api/theatre";
import NavbarComp from "../../Components/Navbar";
import Loader from "../../Components/common/Spinner";
import Cinema from "../../Components/Cinema/Cinema";
import { Button } from "react-bootstrap";
import Payments from "../../Components/Payments/Payments";


function Bookings(){

    const {movieId, theatreId} = useParams();

    const [movieDetails, setMovieDetails]= useState(null);
    const [theatreDetails, setTheatreDetails]= useState(null);
    const [isLoading, setIsLoading] =  useState(true);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [showPaymentModel , setShowPaymentModel] = useState(false);

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

    const openModel=()=>{
      setShowPaymentModel(true);
    }

    const onProceedToPayment=()=>{
      openModel();
    }

    const closeModel = ()=>{
      setShowPaymentModel(false)
    }


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

      

        <p className="info m-3">

          You have selected <span className="count">  {selectedSeats.length}  </span> seats

        </p>




        <p className="info m-3">

          Your total price of  booking is <span className="count">  {selectedSeats.length * 1000}   </span> seats

        </p>
    
    
      
        <Button onClick={onProceedToPayment} disabled={selectedSeats.length===0} variant="success" size="lg" >
        Proceed to Payment
        </Button>

        </div>

   
        }


          {
            showPaymentModel && 
          <Payments selectedSeats={selectedSeats} movieDetails={movieDetails} theatreDetails={theatreDetails} closeModel={closeModel} show={showPaymentModel} />

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
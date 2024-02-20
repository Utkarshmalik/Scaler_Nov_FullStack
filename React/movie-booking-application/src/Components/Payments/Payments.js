import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createBooking, getBookingDetails } from '../../api/booking';
import { useState } from 'react';
import { createPayment } from '../../api/payment';
import { Link } from 'react-router-dom';


function Payments({show,closeModel, movieDetails, theatreDetails, selectedSeats}){

    const [showPaymentButton, setShowPaymentButton] = useState(false);
    const [bookingDetails, setBookingDetails]=  useState(null);

    const isBookingComplete = bookingDetails && bookingDetails.status === "COMPLETED";

    const createBookingFn=async ()=>{


        const bookingRequest = {
            theatreId:theatreDetails._id,
            movieId:movieDetails._id,
            showDate:"10/02/2024",
            showTimings:"07:00 PM",
            seats:selectedSeats
        }

        const booking = await createBooking(bookingRequest);

        console.log(booking);

        if(booking.status==="IN_PROGRESS"){

            setShowPaymentButton(true);
            setBookingDetails(booking);
        }

    }

    const makePayment=async ()=>{


        const bookingId = bookingDetails._id;

        const paymentRequest={
            amount:selectedSeats.length*1000,
            status:"SUCCESS"
        }

        const paymentRes = await createPayment(bookingId, paymentRequest);

        console.log(paymentRes);

        const updatedBooking = await getBookingDetails(bookingId);

        setBookingDetails(updatedBooking);

    }

      return (
      <div>
     <Modal className='p-5' show={show} onHide={closeModel}>
        <Modal.Header closeButton>
          <Modal.Title>ORDER SUMMARY</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <div className='row'>

             <div className='col'>

                <h5> {movieDetails.name} </h5>
                <small> {movieDetails.language} </small>

            

                <br/>

                <small className='text-success'>
                    m-ticket
                </small>



             </div>

             <div className='col-5'>

                <h5> {selectedSeats.length} Tickets </h5>

             </div>


            </div>

            

            <div className='row'>

                <div className='col'>
                    <p> Theatre  </p>
                </div>

                <div className='col-3'>
                    <p>  {theatreDetails.name} </p>
                </div>


            </div>
            

            <hr/>

            <div className='row'>

                <div className='col'>
                    <p> Total </p>
                </div>

                <div className='col-3'>
                    <p> Rs {selectedSeats.length * 1000} </p>
                </div>
                 
                 
                    {

                isBookingComplete &&

                <div>

                
                <p className="fw-bolder"> Your Booking is confirmed </p>


                <div className='row'>

                <div className='col-6'>
                    <p> BookingId </p>
                </div>

                <div className='col-6'>
                    <p> {bookingDetails._id} </p>
                </div>

                </div>


                <div className='row'>

                    <div className='col-6'>
                    <img src={movieDetails.posterUrl} height={100} width={100} /> 
                </div>


                <div className='col-6'>
                    <p> {movieDetails.name} </p>
                </div>

                
                </div>

                </div>

            }


            </div>

            





        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModel}>
            Close
          </Button>

          {

            !showPaymentButton && !isBookingComplete &&

          <Button variant="success" onClick={createBookingFn}>
            Proceed To Payment Gateway
          </Button>

          }

          {
          showPaymentButton && !isBookingComplete && 

            <Button variant="success" onClick={makePayment}>
              Make a Payment
           </Button>
         }

               {
           isBookingComplete && 

            <Link to="/">

             <Button variant="danger" >
              Go to Landing Page
           </Button> 
            </Link>
           
         }

        </Modal.Footer>
      </Modal>
       </div>  
  );

}

export default Payments;

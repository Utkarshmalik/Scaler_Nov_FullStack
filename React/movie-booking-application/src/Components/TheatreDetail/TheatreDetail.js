import { Link } from "react-router-dom";


function TheatreDetail(props){
    
    const {theatre, movieId} = props;
    const {name} = theatre;



    return  <>

    <Link to={`/buyTickets/${movieId}/${theatre._id}`} >
    
    <div style={{border:"1px solid grey",cursor:"pointer"}}  className="row py-5 px-5 m-5 ">

        <div className="col">

            <h5> {name} </h5>

        </div>


        <div className="col">
            <div className="fw-bold">

                <i className="bi bi-phone text-success"> </i>

            </div>

        </div>



        <div className="col">
            <div className="fw-bold">

                <i className="bi bi-cup-straw text-danger"> </i>

            </div>

        </div>



    </div>

    </Link>

    </>

}

export default TheatreDetail;

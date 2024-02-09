import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

function Movie(props){

    const {movieDetails} = props;


    const {posterUrl, name, language, description,director, releaseDate,_id} = movieDetails;


    return <div style={{ height:"800px" }}>

        <Link to={`/movie/${_id}`} >
     

            <Card style={{ width:"300px" }}>
        <Card.Img variant="top" src={posterUrl} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
             {description}
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Language {language} </ListGroup.Item>
            <ListGroup.Item>Director {director}</ListGroup.Item>
            <ListGroup.Item>Release Date {releaseDate} </ListGroup.Item>
        </ListGroup>
        <Card.Body>
            {/* <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
        </Card>
     </Link>

    </div>

    
}


export default Movie;
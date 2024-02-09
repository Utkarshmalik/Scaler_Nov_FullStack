import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/LandingPage';
import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom';
import Auth from './Pages/Auth';
import PageNotFound from './Pages/PageNotFound';
import MovieDetails from './Pages/MovieDetail';

function App() {
  return (
    <Router>

      <Routes>

        <Route path="/login" element={ <Auth/>} />
        <Route path="/signup" element={ <Auth/>} />
        <Route path="/" element={ <LandingPage/>} />
        <Route path="/movie/:movieId" element={ <MovieDetails/>} />
        <Route path="*" element={ <PageNotFound/>} />


      </Routes>


    </Router> 
  );
}

export default App;

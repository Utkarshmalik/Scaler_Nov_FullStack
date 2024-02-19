import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/LandingPage';
import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom';
import Auth from './Pages/Auth';
import PageNotFound from './Pages/PageNotFound';
import MovieDetails from './Pages/MovieDetail';
import Bookings from './Pages/Bookings';
import AuthHoc from './hoc/authHoc';
import { createContext, useState } from 'react';
import MovieTheares from './Pages/MovieTheatres';

export const ThemeContext = createContext();

function App() {

  const [theme, setTheme]= useState("dark");


  return (
    <ThemeContext.Provider value={{theme, changeTheme:setTheme}} >
    <Router>
      <Routes>

        <Route path="/login" element={ <Auth/>} />
        <Route path="/signup" element={ <Auth/>} />
        <Route path="/" element={ <LandingPage/>} />
        <Route path="/movie/:movieId" element={  <AuthHoc> <MovieDetails/></AuthHoc> } />
        <Route path="/bookings" element= { <AuthHoc> <Bookings/></AuthHoc>} />
        <Route path="/buyTickets/:movieId" element= { <AuthHoc> <MovieTheares/></AuthHoc>} />
        <Route path="/buyTickets/:movieId/:theatreId" element= { <AuthHoc> <Bookings/></AuthHoc>} />

        <Route path="*" element={ <PageNotFound/>} />


      </Routes>


    </Router> 
    </ThemeContext.Provider>   
  );
}

export default App;

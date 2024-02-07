import './App.css';
import Login from './Components/Login/Login';
import ProductList from './Components/ProductList/ProductList';
import {useState} from "react";

function App(){

  console.log("App component rendered");

     const [isLoggedIn, setIsLoggedIn] = useState(false);

     const onLogin=()=>{
      console.log("App Component : Setting the logged in state to TRUE ")
      setIsLoggedIn(true);
     }


  return <div style={{textAlign:"center",color:"white",backgroundColor:"black"}}  >

    <h1 > Ecommerce Application </h1>


    {
      (isLoggedIn) ?     <ProductList/> :     <Login onLogin={onLogin} />
    }

  </div>


}


export default App;
import './App.css';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <Button onClick={()=>{
        console.log("I am react testing button")
      }}  text="React Testing" />
    </div>
  );
}

export default App;

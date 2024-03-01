import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import MyClassComponent from './Counter';

const Home = lazy(()=>import('./Home'));
const About = lazy(()=>import('./About'));
const LazyComponent = lazy(()=>import('./LazyComponent'));


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>

             <li>
              <Link to="/about"> About </Link>
            </li>

             <li>
              <Link to="/lazy"> Lazy  </Link>
            </li>
          </ul>
        </nav>


        <hr/>

          <Suspense fallback={<div> Loading..... </div>}>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/lazy" element={<LazyComponent/>}/>
          <Route exact path="/class" element={<MyClassComponent/>} />
            </Routes>

          </Suspense>

       


      </div>

    </Router>
  );
}

export default App;

import "./App.css";

import { 
  BrowserRouter as Router,
  Route, 
  Routes
  } from 'react-router-dom';


// components 
import Rps from "./rps";
import Win from "./win";

// images
import rock from "./images/rock.png";
import paper from "./images/paper.png";
import scissor from "./images/scissor.png";



function App() {
  let cmp = ["rock", "paper", "scissor"];
  let rcmp = cmp[Math.floor(Math.random() * cmp.length)];
  
  function Home() {
    return (
      <div className="abcd">
        <Rps name="rock" image={rock} cname={rcmp} />
        <Rps name="paper" image={paper} cname={rcmp} />
        <Rps name="scissor" image={scissor} cname={rcmp} />
      </div>
    );
  }
  return (
    <div className="container">
      <div className="App">
        <div>
          <h1>Rock Paper Scissors</h1>
          <center>
            <a href="/" className="btn btn-danger btn-lg" >
              Reset
            </a>
          </center>
        </div>
        <Router>
          <Routes>
          <Route path="/" exact element={(Home())} />
            <Route path="analyze" exact element={<Win />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}



export default App;

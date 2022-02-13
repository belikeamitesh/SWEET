import './App.css';
import Doctor from "./pages/Doctor/Doctor";
import Landing from './pages/Landing/Landing';
import Aboutus from "./pages/Aboutus/Aboutus";
import Social from "./pages/Social/Social";
import Medical from "./pages/Medical/Medical";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, {useEffect, useState} from 'react';


function App() {

  /*const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("api/").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  */

  return (
    <div>
      {/*
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      )
      :
      (
      backendData.users.map((user, i) =>
          <p key={i}>{user}</p>
        )
      )
      } 
      */}
       <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/medical" component={Medical} />
      <Route exact path="/aboutus" component={Aboutus} />
      <Route exact path="/doctor" component={Doctor} />
      <Route exact path="/social" component={Social} />
    </Router>
  
    </div>
  );
}

export default App;

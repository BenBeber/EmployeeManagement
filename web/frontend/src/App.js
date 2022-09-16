import React from "react";

import "./components/Employee-Components/Navbar"
import Home from "./components/Home";
import AddEmployee from "./components/Employee-Components/add-employee";
import UpdateEmployee from "./components/Employee-Components/update-employee";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/css/styles.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import NavBar from "./components/Employee-Components/Navbar";


function App() { 

  return (
    <Router>
      <div className="App">
       <NavBar/>
       <Routes>
        <Route exact path={"/"} element={<Home/>}/>
        <Route exact path={"/add-new"} element={<AddEmployee/>}/>
        <Route exact path={"/update"} element={<UpdateEmployee/>}/>
       </Routes>
      </div>
    </Router>
  );
}

export default App;

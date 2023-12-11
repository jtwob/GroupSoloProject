import React from "react";
import "./App.css";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Admin from "./components/pages/Admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { UserProvider } from './UserContext';


function App() {
  return (

      <Router>
        <UserProvider>
          <NavTabs />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/admin" element={<Admin />}></Route>
          </Routes>
        </UserProvider>
      </Router>
  );
}

export default App;

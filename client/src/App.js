import React from "react";
import "./App.css";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Admin from "./components/pages/Admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  
  const UserContext = React.createContext({
    name: 'Guest',
    id: null,
  });
  
  const {signedInUser} = this.props;

  return (
    <UserContext.Provider value={signedInUser}>
      <Router>
        <div>
          <NavTabs />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/admin" element={<Admin />}></Route>
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

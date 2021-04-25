import React from "react";
import Slideshow from "../src/components/Slideshow/Slideshow";
//import Particles from "react-particles-js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Profile from "./components/Profile/Profile";
import Feature from "./components/Features/Feature";
//import Reviews from "./components/Reviews";
import "./App.css";

function App() {
  return (
    <Router>
      
      {/* <Particles 
                canvasClassName="example"
                height="120px"
                width="300px"
                params={{
                    polygon: {
                        enable: true,
                        type: 'inside',
                        move: {
                            radius: 10
                        },
                        url: 'path/to/svg.svg'
                    }
                }} /> */}
                <Slideshow/>
        <Navbar />
         {/* <Route exact path="/" component={Header} />
        <Route exact path="/home" component={Header} />
        <Route exact path="/reviews" component={Reviews} />
        <Route exact path="/feature" component={Feature} />
        <Route exact path="/account" component={Account} />
        <Route path="/about" component={About} /> 
        <Route path="/login" component={LoginForm} />   */}
        
        
        <Route exact path="/" component={Header} />
        <Route exact path="/home" component={Header} />
        <Route exact path="/login" component={Login} /> 
        <Route exact path="/register" component={Register} /> 
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/feature" component={Feature} />
        <Footer/>
        <ToastContainer/>
    </Router>
  );
}

export default App;

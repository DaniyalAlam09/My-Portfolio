import React from "react"
import Header from "./component/Head/Header"
import Features from "./component/Features/Features"
import Home from "./pages/Home/Home"
import Portfolio from "./component/Portfolio/Portfolio"
import Resume from "./component/Resume/Resume"
import Testimonial from "./component/Testimonial/Testimonial"
import Blog from "./component/Blog/Blog"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer"
import "./App.css"
import ResponsiveAppBar from "./component/HeaderAppBar/AppBar"
import SignIn from "./pages/Signin/Signin"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/Signup/Signup"
import { connect } from 'react-redux';
import MyProfile from "./pages/Profile/MyProfile"

const App = ({ isAuthenticated }) => {
  return (
    <>
      <Router>
        <ResponsiveAppBar />
        <div style={{ display: "", textAlign: "center", justifyContent: "center", marginTop: "-10px" }}>
          <Header />
        </div>

        <Routes>
          {
            !isAuthenticated ? (
              <>
                <Route path="/login" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
              </>

            ) : (
              <>
                <Route path="/my-profile" element={<MyProfile />} />
              </>
            )
          }
          <Route exact path="/" element={<Home />} />

          {/* <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Blog />
      <Contact /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isAuthenticated: state.isAuthenticated,// Check if state.auth exists before accessing the error property
  };
};


export default connect(mapStateToProps)(App);



// Pakistan@1234
import React from "react"
import Hero from "../../component/Hero/Hero"
import Features from "../../component/Features/Features"
import Portfolio from "../../component/Portfolio/Portfolio"
import Resume from "../../component/Resume/Resume"
import Testimonial from "../../component/Testimonial/Testimonial"
import Blog from "../../component/Blog/Blog"
import Contact from "../../component/Contact/Contact"
import Header from "../../component/Head/Header"

const Home = () => {
  return (
    <>
      {/* <div style={{ display: "", textAlign: "center", justifyContent: "center", marginTop: "-10px" }}>
        <Header />
      </div> */}
      <Hero />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Blog />
      <Contact />
    </>
  )
}

export default Home

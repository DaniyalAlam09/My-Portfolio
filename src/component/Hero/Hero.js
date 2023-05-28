import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
import react from "../pic/React.png"
import redux from "../pic/Redux.png"
import javaScript from "../pic/JavaScript.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Hero = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY Portfolio Site</h3>
            <h1>
              Hi, I’m <span>Daniyal Alam</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Professional Coder.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>As a MERN stack developer with front-end experience in React JS, I am skilled in building full-stack web applications. My React JS site is likely to have a modern, clean design with responsive, well-structured code.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <a target="_blank" href='https://github.com/DaniyalAlam09'>
                    <button className='btn_shadow'>
                    <i class="fab fa-github"></i>
                    </button>
                  </a>
                  <a target="_blank" href='https://www.instagram.com/dannyalalam/'>
                    <button className='btn_shadow'>
                      <i class='fab fa-instagram'></i>
                    </button>
                  </a>
                  <a target="_blank" href='https://www.linkedin.com/in/daniyal-alam-09'>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                  </a>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={react} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={redux} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={javaScript} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero

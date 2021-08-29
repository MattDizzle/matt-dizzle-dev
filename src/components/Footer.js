import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">

          <div className="footer-about-me">
            <h6>About</h6>
            <p className="footer-about-me-text">My name is Matthew and I live in Rialto, California. I'm an aspiring full stack web developer.
              I love music, basketball, learning and computers. I recently did an Internship at Eide Bailly where I learned
              a ton of stuff about Integrating Multiple systems using a combination of Boomi and SuiteScript 2.0.
              Prior to this Internship I graduated from the Engineering Immersion Program where I learned Full-Stack Web
              Development using PostgreSQL, Express, React and Node.js through hands on learning, building multiple apps. </p>
          </div>

          <div className="quick-links">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="/">About Me</a></li>
              <li><a href="contact">Contact Me</a></li>
              <li><a href="contact">Book an Appointment</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Sitemap</a></li>
            </ul>
          </div>

          <div className="categories">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="code">JavaScript</a></li>
              <li><a href="code">React</a></li>
              <li><a href="code">Express</a></li>
              <li><a href="code">Postgres</a></li>
              <li><a href="code">MongoDB</a></li>
              <li><a href="graphics">Design</a></li>
            </ul>
          </div>

        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="">
            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by
              Matt Dizzle Dev.
            </p>
          </div>

          <div className="social-icons">
            <a href='https://linkedin.com/in/matthew-rougely' target='blank' ><i className="fab fa-linkedin-in icon" /></a>
            <a href='https://github.com/MattDizzle' target='blank' ><i className="fab fa-github icon" /></a>
            <FontAwesomeIcon onClick={scrollToTop} className='icon' icon={faArrowUp} />
          </div>
        </div>
      </div>
    </footer>
  )

}

export default Footer
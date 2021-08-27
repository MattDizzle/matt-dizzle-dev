import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp  } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const Footer = () => {
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
    return (
        <footer className="site-footer">
             <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="coding">JavaScript</a></li>
              <li><a href="coding">React</a></li>
              <li><a href="coding">Express</a></li>
              <li><a href="coding">Postgres</a></li>
              <li><a href="coding">MongoDB</a></li>
              <li><a href="graphics">Design</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="/">About Me</a></li>
              <li><a href="contact">Contact Me</a></li>
              <li><a href="contact">Book an Appointment</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="">
            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by  
         <a href="/"> Matt Dizzle Dev</a>.
            </p>
          </div>

          <div className="social-icons">
              <i className ="fab fa-linkedin-in icon"/>
              <i className="fab fa-github icon" />
              <FontAwesomeIcon onClick={scrollToTop} className='icon'  icon={faArrowUp} />
          </div>
        </div>
      </div>
        </footer>
    )
    
}

export default Footer
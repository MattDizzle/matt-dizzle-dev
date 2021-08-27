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
            <p className="text-justify">Sunt eu non et ut est. Nisi quis ea velit dolor aliqua pariatur sit esse magna cillum occaecat. Cupidatat id proident aliqua non. Duis non exercitation veniam minim amet cillum excepteur ipsum nisi do adipisicing. Cupidatat id sint excepteur sunt laboris. Irure exercitation anim Lorem sunt quis tempor consectetur mollit. Enim cillum cillum occaecat culpa excepteur qui. </p>
          </div>

          <div className="col-xs-6 col-md-3">
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
          Matt Dizzle Dev.
            </p>
          </div>

          <div className="social-icons">
              <a href='https://linkedin.com/in/matthew-rougely' target='blank' ><i className ="fab fa-linkedin-in icon"/></a>
              <a href='https://github.com/MattDizzle' target='blank' ><i className="fab fa-github icon" /></a>
              <FontAwesomeIcon onClick={scrollToTop} className='icon'  icon={faArrowUp} />
          </div>
        </div>
      </div>
        </footer>
    )
    
}

export default Footer
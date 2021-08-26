import React from 'react'
import ReactDOM from 'react-dom'
import logo from '../images/matt-dizzle-dev-logo.png'
import hamburger from '../images/menu-button.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faScroll, faArrowUp  } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import ScrollButton from './components/ScrollToTopButton'

library.add(fab)




export default (props) => {
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
              <li><a href="http://scanfcode.com/category/c-language/">JavaScript</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">React</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">Express</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Postgres</a></li>
              <li><a href="http://scanfcode.com/category/android/">MongoDB</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Design</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/about/">About Me</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Me</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Book an Appointment</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="">
            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by  
         <a href="#"> Matt Dizzle Dev</a>.
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


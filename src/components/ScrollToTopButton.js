import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faScroll, faArrowUp  } from '@fortawesome/free-solid-svg-icons'

const ScrollButton = () =>{
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <button>
     <FontAwesomeIcon onClick={scrollToTop} className='scroll-to-top-icon'  icon={faArrowUp} style={{display: visible ? 'flex' : 'none'}} />
     <FontAwesomeIcon onClick={scrollToTop} className='icon'  icon={faArrowUp} />
    </button>
  );
}
  
export default ScrollButton;
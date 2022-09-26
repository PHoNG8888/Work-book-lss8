import React, {useState} from "react";
import './Style.css';

const ScrollButton = () => {
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
    return(
        <div>
            <button onClick={scrollToTop}
            
            className='btn-scr'
            >back to top</button>
        </div>
    )
}
export default ScrollButton;
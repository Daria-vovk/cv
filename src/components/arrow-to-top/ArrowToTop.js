import { useState, useEffect } from "react";

import "./arrow-to-top.scss";
import arrowTop from "../../assets/footer/top-arrow.svg"

const ArrowToTop = () => {

     const [scrolledHeight, setScrolledHeight] = useState(window.scrollY);


     const handleScrolling = (e) => {
          setScrolledHeight(window.scrollY)
     }

     useEffect(() => {
          document.addEventListener("scroll", handleScrolling);

          return () => {
               document.removeEventListener("scroll", handleScrolling)
          }
     }, [])

     return (
          <>
               {
                    scrolledHeight > document.body.clientHeight ? (
                         <img 
                              src={arrowTop} 
                              alt="Іконка стрілки для переміщення вверх" 
                              className="main-page__arrowTop-icon"
                              onClick={() => document.querySelector(".header").scrollIntoView({behavior: "smooth"})}
                         />
                    ) : null
               }
          </>
     );
};

export default  ArrowToTop;
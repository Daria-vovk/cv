import { useState } from "react";
import { useTransition, animated } from "react-spring";

import "./sliderServices.scss";

const SliderService = ({thumbs}) => {
     const [[imgPathIndex, dir], setImgPathIndex] = useState([0, 0]);

     const imgPath =  Array.isArray(thumbs) 
          ? process.env.PUBLIC_URL + `/sliderService/${thumbs[imgPathIndex]}` 
          : process.env.PUBLIC_URL + `/${thumbs}`;

     const transitions = useTransition(imgPath, {
          from: {
               opacity: 0,
               transform: `translateX(${dir === 1 ? 100 : -100}%)`,
               },
               enter: {
                    opacity: 1,
                    transform: `translateX(0)`,
               },
               leave: {
                    position: "absolute",
                    opacity: 0,
                    transform: `translateX(${dir === 1 ? -100 : 100}%)`,
               },
               config:{duration: 300},
               initial: false
               
     });

     const handleChangeSlide = (dig) => {
          
          if (1 + dig > 0) {
               setImgPathIndex( [(imgPathIndex + dig) % thumbs.length, 1] );
          } else {
               setImgPathIndex( [(imgPathIndex + dig + thumbs.length) % thumbs.length, -1] );
          }
     };

     return (
          <div className="slider">
                <div className="slider__wrapper">
                    <div className="slider__slide slide">
                    {
                         transitions((style, path) => {
                              return ( 
                                   <animated.img src={path} alt="Фото комметария" style={{...style}}  />
                              )
                         })
                    }
                    </div>
                    <button 
                         className="slider__button-prev slider__button-prev_prev1"
                         onClick={() => handleChangeSlide(-1)}
                    >
                    </button>
                    <button 
                         className="slider__button-next"
                         onClick={() => handleChangeSlide(+1)}
                    >
                    </button>
               </div>
          </div>
     );
};

export default SliderService ;
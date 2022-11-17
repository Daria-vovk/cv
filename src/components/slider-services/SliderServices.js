import { useState } from "react";
import {  animated, useTransition } from "react-spring";

import LazyLoadingImage from "../lazyLoadingImage/LazyLoadingImage";

import "./sliderServices.scss";

const SliderService = ({thumbs}) => {
     const [[imgPathIndex, dir], setImgPathIndex] = useState([0, 0]);

     const imgPath =  Array.isArray(thumbs) 
          ? process.env.PUBLIC_URL + `/sliderService/${thumbs[imgPathIndex]}` 
          : process.env.PUBLIC_URL + `/${thumbs}`;

     const transitions = useTransition(imgPath, {
          from: {
               position: "absolute",
               opacity: 0,
               transform: `translate3d(${dir === 1 ? 100 : -100}%, 0%, 0) scale(0.5)`,
          },
          enter: {
               position: "relative",
               opacity: 1,
               transform: `translate3d(0, 0, 0) scale(1)`,
          },
          leave: {
               opacity: 0,
               transform: `translate3d(${dir === 1 ? 100 : -100}%, 0%, 0) scale(0.5)`,
               position: "absolute"
          },

          config:{duration: 300}
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
                         <div
                              className="slider__wrapper-div"
                         >  
                         {
                              transitions((style, path) => {
                                   return (
                                        <animated.div 
                                             style={{...style}}
                                             className="slider__slide slide"
                                        >
                                             <LazyLoadingImage src={path} alt="слайдер " />
                                        </animated.div>
                                   )
                              })
                         }
                         </div>
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
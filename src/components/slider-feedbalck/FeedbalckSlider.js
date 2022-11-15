import { useState } from "react";
import classNames from "classnames";
import { v4 as uuidv4 } from 'uuid';
import { useTransition, animated } from 'react-spring'

import "./feedbalckSlider.scss"
import LazyLoadingImage from "../lazyLoadingImage/LazyLoadingImage";

const FeedbalckSlider = ({thumbsArr, handleClick}) => {

     const [[imgPathIndex, dir], setImgPathIndex] = useState([0, 0]);


     const imgPath =  Array.isArray(thumbsArr) 
          ? process.env.PUBLIC_URL + `/${thumbsArr[imgPathIndex]}` 
          : process.env.PUBLIC_URL + `/${thumbsArr}`;
     
          
     const transitions = useTransition(imgPath, {
          from: {
               opacity: 0,
               position: "absolute",
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
               setImgPathIndex([ (imgPathIndex + dig) % thumbsArr.length, +1 ]);
          } else {
               setImgPathIndex([ (imgPathIndex + dig + thumbsArr.length) % thumbsArr.length, -1 ]);
          }
     };

     const renderPaginationDots = (arrOfSlides = []) => {
          
          if (!Array.isArray(arrOfSlides)) return;

          return thumbsArr.map( (item, i) => {
               const classDot = classNames("swiper__dot", {
                    "active": i === imgPathIndex
               });

               return (
                    <button 
                         className={classDot}
                         onClick={() => setImgPathIndex([i, imgPathIndex > i ? -1 : 1])}
                         key={uuidv4()}
                    ></button>
               )
          });
     };
     


     return (
          <div className="swiper">
               <div className="swiper__wrapper">
                    {
                         transitions((style, path) => {
                              return (
                                   <animated.div 
                                        style={{...style}}
                                        className="swiper__slide slide"
                                   >
                                        <LazyLoadingImage src={path} alt="слайдер " />
                                   </animated.div>
                              )
                         })
                    }
                    <button 
                         className="swiper__button-prev swiper__button-prev_prev1"
                         onClick={() => handleChangeSlide(-1)}
                    >
                         &and;
                    </button>
                    <button 
                         className="swiper__button-next"
                         onClick={() => handleChangeSlide(+1)}
                    >
                         &or;
                    </button>
                    <div className="swiper__pagination-block">
                         {
                              renderPaginationDots(thumbsArr)
                         }
                    </div>
                    <button 
                         className="swiper__close"
                         onClick={(e) => handleClick(e)}
                    >
                         &times;
                    </button>
               </div>
          </div>
     );
};

export default FeedbalckSlider;
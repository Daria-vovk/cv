import { useState } from "react";
import classNames from "classnames";
import { v4 as uuidv4 } from 'uuid';

import "./feedbalckSlider.scss"

const FeedbalckSlider = ({thumbsArr, handleClick }) => {

     const [imgPathIndex, setImgPathIndex] = useState(0);

     const imgPath =  Array.isArray(thumbsArr) 
          ? process.env.PUBLIC_URL + `/${thumbsArr[imgPathIndex]}` 
          : process.env.PUBLIC_URL + `/${thumbsArr}`;

     const handleChangeSlide = (dig) => {
          if (!thumbsArr[imgPathIndex + dig]) return;

          setImgPathIndex(imgPathIndex + dig )
     }

     const renderPaginationDots = (arrOfSlides = []) => {
          
          if (!Array.isArray(arrOfSlides)) return;

          return thumbsArr.map( (item, i) => {
               const classDot = classNames("swiper__dot", {
                    "active": i === imgPathIndex
               });

               return (
                    <button 
                         className={classDot}
                         onClick={() => setImgPathIndex(i)}
                         key={uuidv4()}
                    ></button>
               )
          });
     }

     return (
          <div className="swiper">
               <div className="swiper__wrapper">
                    <div className="swiper__slide slide">
                         <img src={imgPath} alt="слайдер " />
                         <button 
                              className="swiper__close"
                              onClick={(e) => handleClick(e)}
                         >
                              &times;
                         </button>
                    </div>

                    {
                         imgPathIndex > 0 ? <button 
                                                  className="swiper__button-prev swiper__button-prev_prev1"
                                                  onClick={() => handleChangeSlide(-1)}
                                             >
                                                  &and;
                                             </button>
                                        : null
                    }
                    {
                         Array.isArray(thumbsArr) ? <button 
                                                            className="swiper__button-next"
                                                            onClick={() => handleChangeSlide(+1)}
                                                       >
                                                            &or;
                                                       </button>
                                                  : null
                    
                    }
                    <div className="swiper__pagination-block">
                         {
                              renderPaginationDots(thumbsArr)
                         }
                    </div>
               </div>
          </div>
     );
};

export default FeedbalckSlider;
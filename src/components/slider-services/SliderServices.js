import { useState } from "react";

import "./sliderServices.scss";

const SliderService = ({thumbs}) => {
     const [imgPathIndex, setImgPathIndex] = useState(0);

     const imgPath =  Array.isArray(thumbs) 
          ? process.env.PUBLIC_URL + `/sliderService/${thumbs[imgPathIndex]}` 
          : process.env.PUBLIC_URL + `/${thumbs}`;

     const handleChangeSlide = (dig) => {
          if (!thumbs[imgPathIndex + dig]) return;

          setImgPathIndex(imgPathIndex + dig )
     };

     return (
          <div className="slider">
                <div className="slider__wrapper">
                    <div className="slider__slide slide">
                         <img src={imgPath} alt="Фото комметария" />
                    </div>
                    {
                         imgPathIndex > 0 ? <button 
                                                  className="slider__button-prev slider__button-prev_prev1"
                                                  onClick={() => handleChangeSlide(-1)}
                                             >
                                             </button>
                                        : null
                    }
                    {
                         thumbs[imgPathIndex + 1]  ? <button 
                                                            className="slider__button-next"
                                                            onClick={() => handleChangeSlide(+1)}
                                                       >
                                                       </button>
                                                  : null
                    
                    }
               </div>
          </div>
     );
};

export default SliderService ;
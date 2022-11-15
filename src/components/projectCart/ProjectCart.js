import { useState } from "react";

import Button from "../button/Button";
import LazyLoadingImage from "../lazyLoadingImage/LazyLoadingImage";
import FeedbalckSlider from "../slider-feedbalck/FeedbalckSlider";

import "./projectCart.scss";

const ProjectCart = ({ name, thumbs, nodeRef, amount, period, romi,tax }) => {
     const [isSlider, setIsSlider] = useState(false);

     const handleOpeningSlider= (e) => {
          if (!e) return;

          document.body.classList.add("_lock");
          
          setIsSlider(true);
     }

     const handleClosingSlider= (e) => {
          if (!e) return;

          document.body.classList.remove("_lock");
          
          setIsSlider(false);
     }

     const initImagePath = Array.isArray(thumbs) ? thumbs[0] : thumbs

     return (
          <>
               <div 
                    className="project__block"
                    onClick={(e) => handleOpeningSlider(e)}
                    ref={nodeRef}
               >
                    <div className="project__image-block">
                         <LazyLoadingImage src={process.env.PUBLIC_URL + `/${initImagePath}`} alt="Фото проекта" />
                    </div>
                    <div className="project__text-block">
                         <h3 className="project__text-block-title">
                              <span>{name}</span>
                         </h3>
                         <div className="project__romi">ROMI: <span>{romi}</span></div>
                         <div className="project__total-amount">Заробили: <span>{amount}</span></div>
                         <div className="project__period">Вклали: <span>{tax}</span></div>
                         <Button 
                              handleClick={(e) => handleOpeningSlider(e)}
                              children="Детальніше" 
                              isCarts 
                              isYellow
                         />
                    </div>
               </div>
               {
                    isSlider ? <FeedbalckSlider title={name} thumbsArr={thumbs} handleClick={(e) => handleClosingSlider(e)}/> : null
               }
               </>
     );
};

export default ProjectCart;
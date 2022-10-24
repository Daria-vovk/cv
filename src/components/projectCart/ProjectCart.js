import { useState } from "react";
import Button from "../button/Button";
import FeedbalckSlider from "../slider-feedbalck/FeedbalckSlider";

import "./projectCart.scss";

const ProjectCart = ({ name, thumbs }) => {
     const [isSlider, setIsSlider] = useState(false);

     const renderName = (name) => {
          return (
               <>
                    <span>{name.split(" ")[0]}</span> <br /> {name.split(" ").slice(1).join(" ")}
               </>
          )
     }

     const handleClosingSlider= (e) => {
          if (!e) return;

          setIsSlider(!isSlider)
     }

     const initImagePath = Array.isArray(thumbs) ? thumbs[0] : thumbs

     return (
          <>      
               <div 
                    className="project__block"
                    onClick={(e) => handleClosingSlider(e)}
               >
                    <div className="project__image-block">
                         <img src={process.env.PUBLIC_URL + `/${initImagePath}`} alt="Фото проекта" />
                    </div>
                    <div className="project__text-block">
                         <h3 className="project__text-block-title">
                              {
                                   renderName(name)
                              }
                         </h3>
                         <Button 
                              handleClick={(e) => handleClosingSlider(e)}
                              children="Побачити результ" 
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
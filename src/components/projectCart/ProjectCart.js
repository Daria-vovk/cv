import { useState } from "react";
import Button from "../button/Button";
import FeedbalckSlider from "../slider-feedbalck/FeedbalckSlider";

import "./projectCart.scss";

const ProjectCart = ({ name, thumbs, desc }) => {
     const [isSlider, setIsSlider] = useState(false);

     const renderName = (name) => {
          return (
               <>
                    <span>{name.split(" ")[0]}</span> <br /> {name.split(" ").slice(1).join(" ")}
               </>
          )
     }

     const handleClick = (e) => {
          if (!e) return;

          setIsSlider(!isSlider)
     }

     const initImagePath = Array.isArray(thumbs) ? thumbs[0] : thumbs

     return (
          <>
               {
                    isSlider 
                         ? (
                              <div className="project__block project__block_swiper">
                                   <h3 className="project__text-block-title project__text-block-title_swiper">
                                        <span>{name}</span>    
                                   </h3>     
                                   <FeedbalckSlider title={name} desc={desc} thumbsArr={thumbs} handleClick={handleClick}/>
                              </div>
                         ) : (
                              <div 
                                   className="project__block"
                                   onClick={(e) => handleClick(e)}
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
                                             handleClick={(e) => handleClick(e)}
                                             children="Побачити результ" 
                                             isCarts 
                                             isYellow
                                        />
                                   </div>
                              </div>
                         )
               }
          </>
     );
};

export default ProjectCart;
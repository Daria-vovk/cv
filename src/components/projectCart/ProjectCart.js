import Button from "../button/Button";

import "./projectCart.scss";

const ProjectCart = ({ name, thumbs, num }) => {

     const renderName = (name) => {
          return (
               <>
                    <span>{name.split(" ")[0]}</span> <br /> {name.split(" ").slice(1).join(" ")}
               </>
          )
     }

     return (
          <div className="project__block">
               <div className="project__image-block">
                    <img src={process.env.PUBLIC_URL + `/${thumbs}`} alt="Фото проекта" />
               </div>
               <div className="project__text-block">
                    <h3 className="project__text-block-title">
                         {
                              renderName(name)
                         }
                    </h3>
                    <Button children="Побачити результ" isCarts isYellow />
               </div>
          </div>
     );
};

export default ProjectCart;
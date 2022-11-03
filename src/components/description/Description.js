import Button from "../button/Button";

import mainPhoto from "../../assets/mainPage/mainPhoto.jpg";
import "./description.scss"
import { LazyLoadingImage } from "../transponder";

const Description = ({setIsOpenForm}) => {
     return (
          <div className="main-page__row">
               <div className="main-page__left-side">
                    <h3 className="main-page__title-greeting">Привіт !</h3>
                    <h1 className="main-page__name">Моє ім'я <span>Дарія Вовк</span></h1>
                    <p className="main-page__profession">Targetolog || SMM specialist</p>
                    <p className="main-page__descr-text">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sint quasi commodi consectetur veritatis temporibus placeat natus culpa blanditiis assumenda unde dolor sunt, optio exercitationem sapiente numquam hic nihil, quisquam quis modi officiis illo consequatur fuga corporis! Harum delectus optio, animi modi distinctio sint rem assumenda eos laudantium sequi dicta laborum placeat dignissimos consequatur voluptatum aliquid tenetur earum labore ut omnis veniam repudiandae! Mollitia id libero ipsam aspernatur enim consectetur, quo a ut maxime inventore nam doloremque totam ad animi, at omnis est expedita deleniti. Velit nam rem dolores accusamus.

                    </p>
                    <div className="main-page__btn-section">
                         <Button handleOpeningForm={setIsOpenForm} isYellow pseuElem>Напиши мені</Button>
                    </div>
               </div>
               <div className="main-page__right-side">
                    <div className="main-page__wrapper">
                         <span></span>
                         <div className="main-page__image-block">
                              <LazyLoadingImage src={mainPhoto} alt="Дарія"/>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Description;
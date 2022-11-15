import Button from "../button/Button";
import { LazyLoadingImage } from "../transponder";

import mainPhoto from "../../assets/mainPage/main-grey.jpg";

import "./description.scss"


const Description = ({setIsOpenForm}) => {
     return (
          <div className="main-page__row">
               <div className="main-page__left-side">
                    {/* <h3 className="main-page__title-greeting">Привіт !</h3> */}
                    <h1 className="main-page__name">{/*Моє ім'я */}<span>Дарія Вовк</span></h1>
                    <p className="main-page__profession">Таргетолог || Facebook & Instagram </p>
                    <p className="main-page__descr-text">
                         Якщо вам потрібно знайти нових клієнтів і масштабувати ваш бізнес - ви тут недаремно.
                         Я маю практичний досвід більше 1 року у 20+ різних бізнесах, 10 проектів з ROMI (окупністю) 500+ %.
                         Тут ви можете побачити мої кейси, відгуки та список послуг.
                    </p>
                    <div className="main-page__btn-section">
                         <Button handleOpeningForm={setIsOpenForm} isYellow pseuElem>Залишити заявку</Button>
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
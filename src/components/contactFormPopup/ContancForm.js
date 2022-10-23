import Button from "../button/Button";

import "./contactForm.scss"

const ContactForm = ({handleClosingForm}) => {
     return (
          <form action="#" className="form" tabIndex="0" autoComplete="on">
               <div className="form__wrapper">
                    <div className="form__content">
                         <input  className="form__name-input" type="text" name="name" placeholder="Ваше ім'я" tabIndex="0" autoComplete="on" autoFocus required/>
                         <input  className="form__phone-input" type="text"  name="phone" placeholder="Ваш телефон" tabIndex="0"autoComplete="on" required/>
                         <input  className="form__link-input" type="text"  name="link" placeholder="Посилання на аккаунт Instagram" tabIndex="0" autoComplete="on" required/>
                         <textarea className="form__text-area" name="comment" cols="30" rows="10"  placeholder="Коментар"></textarea>
                    </div>
                    <Button className="form__btn-input" tabIndex="1" children="Надіслати" isYellow/>
                    <button 
                         className="form__close"
                         onClick={() => {
                              document.body.classList.remove("_lock");
                              handleClosingForm();
                         }}
                    >
                         &times;
                    </button>
               </div>
          </form> 
     );
};

export default ContactForm ;
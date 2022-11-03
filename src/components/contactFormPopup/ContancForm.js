import { useState, useRef, useEffect } from "react";
import classNames from "classnames";

import Button from "../button/Button";
import { useSpring, animated } from 'react-spring';

import "./contactForm.scss"


const ContactForm = ({handleClosingForm}) => {

     const [validString, setValidString] = useState("");
     const [number, setNumber ] = useState("");
     const [isInvalidName, setIsInvalidName] = useState(false);
     const nameInputRef = useRef(null);
     const numberInputRef = useRef(null);

     const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config: {duration: 500} });

     const handleNameValidate = (e) => {
          const regExp =  /^(([a-zA-Z' -]{1,80})|([а-яА-ЯЁёІіЇїҐґЄє' - \s]{1,80}))$/u;
          
          if ( !regExp.test(e.target.value) || validString.length < 3) {
               setValidString(e.target.value)
               setIsInvalidName(true)
              return;
          }

          setIsInvalidName(false)

          setValidString(e.target.value)
     }

     const checkInvalidInputs = () => {

          if (isInvalidName) {
               nameInputRef.current.focus()
               return;
          }
     }

     const createMask = (event) => {
          let matrix = '+380 (__) ___ __ __',
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = event.target.value.replace(/\D/g, "");
     
          if (def.length >= val.length) {
               val = def;
          }
     
          setNumber(matrix.replace(/./g, function(a) {

               if (/[_\d]/g.test(a) && i < val.length) {
                    return val.charAt(i++);
               } else if (i >= val.length) {
                    return "";
               } else {
                    return a;
               }
     
          }));
     
          if (event.type === "blur") {
               if (event.target.value.length <= 3) {
                    numberInputRef.current.value = "";
               }
          }
     }

     useEffect(() => {
          const numberInput = numberInputRef.current;

          numberInput.addEventListener("focus", createMask);
          numberInput.addEventListener("blur", createMask);
          numberInput.addEventListener("input", createMask);

          return () => {
               numberInput.removeEventListener("focus", createMask);
               numberInput.removeEventListener("blur", createMask);
               numberInput.removeEventListener("input", createMask);
          }
     }, [])


     const classInvalidInput = classNames("form__name-input", {
          "form__invalidNameInput": isInvalidName,
          "form__validNameInput": !isInvalidName && validString
     });

     const classNumberInput = classNames("form__phone-input", {
          "form__validNameInput": number.length === 19
     });

     const disabledBtn = isInvalidName || number.length < 19;

     return (
          <animated.form style={props} action="#" className="form" tabIndex="0" autoComplete="on">
               <div className="form__wrapper">
                    <div className="form__content">
                         <input  
                              className={classInvalidInput}
                              type="text"
                              name="name"
                              placeholder="Ваше ім'я"
                              value={validString}
                              ref={nameInputRef}
                              tabIndex="0"
                              autoComplete="on"
                              onChange={(e) => handleNameValidate(e)}
                              autoFocus 
                              required
                         />
                         {
                              isInvalidName ? <span>Ім'я повинно містити лише літери</span> : null
                         }
                         <input  
                              className={classNumberInput} 
                              onClick={() => checkInvalidInputs()}
                              ref={numberInputRef}
                              value={number}
                              type="text"  
                              name="phone" 
                              placeholder="Ваш телефон" 
                              tabIndex="0"
                              autoComplete="on" 
                              required
                         />
                         <input  
                              className="form__link-input" 
                              onClick={() => checkInvalidInputs()}
                              type="text"  
                              name="branch" 
                              placeholder="Вашa ніша" 
                              tabIndex="0"
                              autoComplete="on"
                              required
                         />
                         <input 
                              className="form__link-input"
                              onClick={() => checkInvalidInputs()}
                              type="text" 
                              name="link"
                              placeholder="Посилання на аккаунт Instagram / Сайт" 
                              minLength="5"
                              maxLength="10"
                              tabIndex="0" 
                              autoComplete="on"/>
                         <textarea 
                              className="form__text-area" 
                              name="comment"
                              cols="30" rows="10" 
                              placeholder="Коментар"
                              onClick={() => checkInvalidInputs()}
                         >
                         </textarea>
                    </div>
                    <Button className="form__btn-input" tabIndex="1" children="Надіслати" isYellow disabled={disabledBtn}/>
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
               <div className="bg-img"></div>
          </animated.form> 
     );
};


export default ContactForm ;



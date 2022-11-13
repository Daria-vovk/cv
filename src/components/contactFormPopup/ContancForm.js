import { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { useSpring, animated } from 'react-spring';

import Button from "../button/Button";

import "./contactForm.scss"


const ContactForm = ({handleClosingForm}) => {

     const [validString, setValidString] = useState("");
     const [number, setNumber ] = useState("");
     const [bussinesInput, setBussinesInput] = useState("");
     const [linkInput, setLinkInput] = useState("");
     const [commentInput, setCommentInput] = useState("");
     const [isInvalidAreaInput, setIsInValidAreaInput] = useState(false);

     const [isInvalidName, setIsInvalidName] = useState(false);
     const [loading, setLoading] = useState(false);
     const [popupFormMessage, setPopupFormMessage] = useState("");
     const TOKEN = "5772258054:AAHdSRpWmGILF50Hf12X9gGKaOitP2oxKHw";
     const CHAT_ID = "-867909441";
     const nameInputRef = useRef(null);
     const numberInputRef = useRef(null);

     const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config: {duration: 500} });

     const handleNameValidate = (e) => {
          const regExp =  /^(([a-zA-Z' -]{1,80})|([а-яА-ЯЁёІіЇїҐґЄє' - \s]{1,80}))$/u;
          
          if ( !regExp.test(e.target.value)) {
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

          const symbol = matrix.replace(/./g, function(a) {

               if (/[_\d]/g.test(a) && i < val.length) {
                    return val.charAt(i++);
               } else if (i >= val.length) {
                    return "";
               } else {
                    return a;
               }
     
          });
     
          setNumber(symbol);
     
          if (event.type === "blur") {
               if (event.target.value.length <= 3) {
                    numberInputRef.current.value = "";
               }
          }
     }

     const checkInvalidArea = (e) => {
 
          const symbol = e.target.value.replace(/./g, (a) => {
               if (/[\w\s а-яёыії]/gi.test(a)) {
                    setIsInValidAreaInput(false);
                    return a;
               } else {
                    setIsInValidAreaInput(true);
                  return  ""
               }
          });

          setBussinesInput(symbol)
     }

     const handleSubmitForm = async (e) => {
          e.preventDefault();

          let message = `Нова заявка з Вашого сайту-портфоліо%0A%0A
               Ім'я ліда:                                  ${validString}%0A
               Номер телефону:                 ${number}%0A
               Ніша просування:                ${bussinesInput}%0A
               Посилання на аккаунт:      ${linkInput || "Не було заповнено"}%0A
               Комментар клієнта:             ${commentInput || "Не було заповнено"}%0A%0A Щасти в роботі ! `
               
               // 
          const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${message}`;
          
          let xhr = new XMLHttpRequest();
          xhr.open("GET", url);

          xhr.onerror = function() { 
               setPopupFormMessage("Виникла помилка, перевірте інтеренет з'єднання");

               setTimeout(() => {
                    setPopupFormMessage("")
               }, 3000)
          };
          
          xhr.onloadstart = function (event) { 
               setLoading(true);
          };

          xhr.send();

          xhr.onloadend = function(event) {
               setLoading(false);

               if (xhr.status !== 200) return;
               
               
               setPopupFormMessage("Повідомлення успішно відправлено, очікуйте, ми з Вами зв'яжкмося");

               setTimeout(() => {
                    setPopupFormMessage("")
                    handleClosingForm();
               }, 3000)
               
          };

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
          "form__validNameInput": !isInvalidName && validString.length > 3
     });

     const classNumberInput = classNames("form__phone-input", {
          "form__validNameInput": number.length === 19
     });

     const classAreaInput = classNames("form__adv-input", {
          "adv-input-succes": !isInvalidAreaInput && bussinesInput.length > 3,
          "adv-input-invalid": isInvalidAreaInput && bussinesInput.length > 0
     })

     const classWarnMessageForm = classNames("form__warn", {
          "form__warn_error": popupFormMessage === "Виникла помилка, перевірте інтеренет з'єднання",
          "form__warn_success": popupFormMessage === "Повідомлення успішно відправлено, очікуйте, ми з Вами зв'яжкмося"
     })


     const disabledBtn = validString.length < 4 || number.length < 19 || bussinesInput.length < 4;
     

     return (
          <animated.form 
               style={props} 
               action="#" 
               className="form" 
               tabIndex="0" 
               autoComplete="on"
               onSubmit={(e) => handleSubmitForm(e)}
          >
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
                              onChange={(e) => createMask(e)}
                              type="text"  
                              name="phone" 
                              placeholder="Ваш телефон" 
                              tabIndex="0"
                              autoComplete="on" 
                              required
                         />
                         <div className="form__advInput-wrapper">
                              <input  
                                   className={classAreaInput} 
                                   onClick={() => checkInvalidInputs()}
                                   type="text"  
                                   name="branch" 
                                   placeholder="Що потрібно рекламувати?"
                                   value={bussinesInput} 
                                   onChange={(e) => checkInvalidArea(e) }
                                   tabIndex="0"
                                   autoComplete="on"
                                   required
                              />
                         </div>
                         {
                              isInvalidAreaInput && bussinesInput.length > 0 ? <span>Дозволено вводити лише цифри та літери!</span> : null
                         }
                         <input 
                              className="form__link-input"
                              onClick={() => checkInvalidInputs()}
                              type="text" 
                              name="link"
                              placeholder="Посилання на аккаунт Instagram / Сайт"
                              value={linkInput}
                              onChange={(e) => setLinkInput(e.target.value)}
                              minLength="5"
                              tabIndex="0" 
                              autoComplete="on"/>
                         <textarea 
                              className="form__text-area" 
                              name="comment"
                              value={commentInput}
                              onChange={(e) => setCommentInput(e.target.value)}
                              cols="30" rows="10" 
                              placeholder="Коментар"
                              onClick={() => checkInvalidInputs()}
                         >
                         </textarea>
                         {
                              popupFormMessage? <div className={classWarnMessageForm}>{popupFormMessage}</div> : null
                         }
                    </div>
                    <Button 
                         className="form__btn-input"
                         tabIndex="1" 
                         children={loading ? null : "Надіслати заявку"} 
                         loading={loading}
                         isYellow 
                         disabled={disabledBtn}/>
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



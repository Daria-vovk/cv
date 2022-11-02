import { useState, useRef, useEffect } from "react";
import classNames from "classnames"
import { v4 as uuidv4 } from 'uuid';
import { useTransition, animated } from 'react-spring'

import Button from "../button/Button";
import Socials from "../socials/Socials";
import { AlertModal } from "../transponder";

import "./header.scss";

const Header = () => {

     const [pages, setPages] = useState(["Головна", "Моя історія", "Проекти", "Співпраця"]);
     const [isBurger, setIsBurger] = useState(false);
     const [paramLinkObj, setParamLinkObj] = useState({});
     const [alertMessage, setAlertMessage] = useState("");
     const currentLink = useRef(null);

     const [hrefLink, setHrefLink] = useState(null)

     const transitions = useTransition(isBurger, {
          initial: {
               opacity: 1,
               transform: "rotate(0deg) translate(0, 0)",
          },
          from: {
                    opacity: 0,
                    transform: "rotate(90deg) translate(-100%, -100%)",
               },
          enter: {
                    opacity: 1,
                    transform: "rotate(0deg) translate(0, 0)",
               },
          leave: {
                    opacity: 0,
                    transform: "rotate(90deg) translate(-100%, -100%)",
               },

          config:{duration: 500},
     });
     
     const handleClickToSocials = (e) => {

          e.preventDefault();

          let message =  null;

          switch (e.target.parentElement.getAttribute("dataKey")) {
               case "string" :
                    message = "Ви дійсно хочете перейти на сторінку Дарії ?"
                    break;
               case "number":
                    message = "Зателефонувати Дарії ?"
                    break;
               case "mail":
                    message = "Написати листа Дарірї?"
                    break;
               default:
                    message = "Ви впевнені в цьому ?"
          };

          setParamLinkObj({href: e.target.getAttribute("href")});

          setAlertMessage(message)          
     };

     const renderPagesList = (arrOfNames) => {

          return arrOfNames.map(name => {
          
               return (
                    <Button key={uuidv4()} isMenu>{name}</Button>
               )
          });
     };

     const handleAlertClose = () => {
          setAlertMessage("");
     }
     useEffect(() => {

          currentLink.current.addEventListener("click", handleClickToSocials);

          return function() {
               currentLink.current.removeEventListener("click", handleClickToSocials);
          };

     }, []);


     const burgerClass = classNames("header__right-side right-burger", {
          "active": isBurger
     });

     return (
          <header className="header">
               <div className="header__container _container">
                    {
                        alertMessage.length > 1 ? <AlertModal {...paramLinkObj} title={alertMessage} handleAlertClose={handleAlertClose}/> : null
                    }
                    <ul className="header__left-side1" ref={currentLink}>
                         <li className="header__find-me">Я у соціальних</li>
                         {
                              <Socials/>
                         }
                    </ul>
                    <ul className={burgerClass}>
                         <div 
                              className="right-burger__icon"
                              onClick={() => {
                                   setIsBurger(!isBurger);
                                   document.body.classList.toggle("_lock");
                              }}
                         >
                              <span></span>
                              <span></span>
                              <span></span>
                         </div>
                         {
                              transitions((style, item) => {
                                   return (
                                        <nav className="right-burger__body">
                                             <animated.ul 
                                                  className="right-burger__menu"
                                                  style={style}
                                             >
                                                  {
                                                       renderPagesList(pages)
                                                  }
                                             </animated.ul>
                                        </nav>
                                   )}
                              )
                         }
                         
                    </ul>
               </div>
          </header>
     );
};

export default Header;
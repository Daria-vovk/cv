import { useState, useRef, useEffect } from "react";
import classNames from "classnames"
import { useTransition, animated } from 'react-spring'

import Button from "../button/Button";
import Socials from "../socials/Socials";
import { AlertModal, MenuList } from "../transponder";

import "./header.scss";

const Header = () => {

     const [isBurger, setIsBurger] = useState(false);
     const [paramLinkObj, setParamLinkObj] = useState({});
     const [alertMessage, setAlertMessage] = useState("");
     const currentLink = useRef(null);

     const transitions = useTransition(isBurger, {

          from: {
                    opacity: 1,
                    transform: "translate(100%, 0)",
               },
          enter: {
                    opacity: 1,
                    transform: "translate(0, 0)",
               },
          leave: {
                    transform: "rotate(90deg) translate(-100%, -100%)",
               },

          config:{duration: 200},
          delay: 0
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

     const handleAlertClose = () => {
          setAlertMessage("");
     }


     const animatedBodyBurger = () => {

          return (
               transitions((style, burgerOpen) => (
                    burgerOpen && (
                         <animated.nav
                              style={style}
                              className="right-burger__body"
                         >
                              <ul 
                                   className="right-burger__menu"
                              >
                                   <MenuList handleBurger={{isBurger, setIsBurger}}/>
                              </ul>
                         </animated.nav>       
                    )                           
               ))
          )
     };


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
                         {
                              document.documentElement.clientWidth < 950 ? (
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

                                        {
                                             isBurger ? animatedBodyBurger() : null
                                        }
                                   </div>
                              ) : (
                                   <nav>
                                        <ul 
                                             className="right-burger__menu"
                                        >
                                             <MenuList handleBurger={{isBurger, setIsBurger}}/>
                                        </ul>
                                   </nav>
                              )                                        
                         }
                         
                    </ul>
               </div>
          </header>
     );
};

export default Header;
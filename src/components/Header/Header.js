import { useState, useRef, useEffect } from "react";

import { v4 as uuidv4 } from 'uuid';
import Button from "../button/Button";
import Socials from "../socials/Socials";

import "./header.scss";

const Header = () => {

     const [pages, setPages] = useState(["Головна", "Моя історія", "Проекти", "Співпраця"]);
     const currentLink = useRef(null);
     
     const handleClickToSocials = (e) => {

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
          
          if (!window.confirm(message)) {
               e.preventDefault();
          }
     };

     useEffect(() => {
          currentLink.current.addEventListener("click", handleClickToSocials);

          return function() {
               currentLink.current.removeEventListener("click", handleClickToSocials);
          };

     }, []);

     const renderPagesList = (arrOfNames) => {

          return arrOfNames.map(name => {
          
               return (
                    <Button key={uuidv4()} isMenu>{name}</Button>
               )
          });
     };

     return (
          <header className="header">
               <div className="header__container _container">
                    <ul className="header__left-side" ref={currentLink}>
                         <li className="header__find-me">Я у соціальних</li>
                         {
                              <Socials/>
                         }
                    </ul>
                    <ul className="header__right-side right-burger">
                         <div className="right-burger__icon">
                              <span></span>
                              <span></span>
                              <span></span>
                         </div>
                         <nav className="right-burger__body">
                              <ul className="right-burger__menu">
                                   {
                                        renderPagesList(pages)
                                   }
                              </ul>
                         </nav>
                    </ul>
               </div>
          </header>
     );
};

export default Header;
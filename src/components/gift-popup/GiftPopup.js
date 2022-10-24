import { useState } from 'react';

import Socials from '../socials/Socials';

import bigGift from "../../assets/mainPage/biggift.svg";    

import "./giftpopup.scss";


const GiftPopup = ({handleClosingPopup}) => {

     return (
          <div className="popup-gift gift">
               <div className="gift__dialog">
                    <div className="gift__content">
                         <button 
                              className="gift__close"
                              onClick={() => {
                                   handleClosingPopup();
                                   document.body.classList.remove("_lock"); 
                              } }
                         >
                              &times;
                         </button>
                         <h2>У нас є для вас подарунок!</h2>
                         <img src={bigGift} alt="Картинка подарунку"/>
                         <ul className="gift__socials-list">
                              <Socials/>
                         </ul>
                         <p>Напиши до однії із соцільних мереж слово <span>Подарунок</span> та отримай безкоштовну консультацію по вашому бізнесу !</p>
                    </div>
               </div>
          </div>
     );
};

export default GiftPopup ;
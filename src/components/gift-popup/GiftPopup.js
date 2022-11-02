import { useTransition, animated } from 'react-spring';

import Socials from '../socials/Socials';

import bigGift from "../../assets/mainPage/biggift.svg";    

import "./giftpopup.scss";


const GiftPopup = ({handleClosingPopup}) => {

     const transitions = useTransition(null, {
          from: {
               opacity: 0,
               transform: "translate(-50%, -100%)",
               backgroundColor: "transparent"
             },
             enter: {
               opacity: 1,
               transform: "translate(-50%, -50%)",
               backgroundColor: ""
             },
             leave: {
               opacity: 0,
               transform: "translateY(100%)"
             },
             config:{duration: 300},
             reset: true
     });

     return (
          <>
               {
                    transitions((style, item) => {
                         return (
                              <div 
                                   className="popup-gift gift"
                                   
                              >
                                   <div className="gift__dialog">
                                        <animated.div
                                             className="gift__content"
                                             style={{...style}} 
                                        >
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
                                        </animated.div>
                                   </div>
                              </div>
                         )
                    })
               }
          </>
     );
};

export default GiftPopup ;
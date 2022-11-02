import { useTransition, animated } from 'react-spring'

import "./alertModal.scss";

const AlertModal = ({title, href, handleAlertClose}) => {

     const transitions = useTransition(href, {
          
          from: {
                    opacity: 0,
                    transform: "translate(-50%, -100%)",
               },
          enter: {
                    opacity: 1,
                    transform: "translate(-50%, 0)",
               },
          leave: {
                    opacity: 0,
                    transform: "translate(-50%, -100%) scale(0.6)",
               },

          config:{duration: 100},
     });
     
     return (
          <>
          {
               transitions((style, href) => {

                   return (
                         <animated.div 
                              style={{...style}}
                              className="alert">
                              <h6>{title}</h6>
                              <div className="alert__btn-block">
                                   <button
                                        className="alert__confirm-btn"
                                   >
                                   <a href={href}>Звісно</a>
                                   </button>
                                   <button
                                        className="alert__cancel-btn"
                                        onClick={() => handleAlertClose()}
                                   >
                                        Скасувати
                                   </button>
                              </div>
                              <button
                                        className="alert__close-btn"
                                        onClick={() => handleAlertClose()}
                                   >
                                        x
                              </button>
                         </animated.div>
                   )
               })
          }  
          </>        
     );
};

export default AlertModal ;
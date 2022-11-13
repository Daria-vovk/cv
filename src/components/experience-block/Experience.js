import { useEffect, useRef, useState } from "react";

import "./experience.scss";

const Experience = () => {

     const [currentSrolledHeight, setCurrentSrolledHeight] = useState(null);
     const [isDeletedCovering, setIsDeletedCovering] = useState(false);

     const experienceRef = useRef(null);
     const coverBlockRef = useRef(null);

     const handleCoveredBlock = () => {

          if (window.scrollY < 4500) return;

          setCurrentSrolledHeight(window.scrollY)
          
          if (window.scrollY > 4500 && coverBlockRef.current) {
               coverBlockRef.current.style.transform = `translateY(100%)`;
          }          
     }

     useEffect(() => {
          document.addEventListener("scroll", handleCoveredBlock);

          return () => {
               document.removeEventListener("scroll", handleCoveredBlock);
          };
     }, [])

     return (
          <div 
               className="experince"
               ref={experienceRef}
          >
               <h3>Мій досвід</h3>
               <div className="experince__wrapper">
                    <div className="experince__atom">
                         <p>Перший курс по таргету<br /> онлайн-університет <b>"АТОМ "</b></p>
                         <span>Травень 2021</span>
                    </div>
                    <div className="experince__first-client">
                         <p>Перший клієнт в товарці <br /> і успішний кейс</p>
                         <span>Червень 2021</span>
                    </div>
                    <div className="experince__info-chigans">
                          <p>Перехід на фріланс,<br /> робота помічником таргетолога,<br /> практика в агенції <br /> і особисті проекти.</p>
                         <span>Жовтень 2021</span>
                    </div>
                    <div className="experince__agency-first">
                         <p>Новий курс від <br /> “The Best Marketing"</p>
                         <span>Січень 2022</span>
                    </div>
                    <div className="experince__agency-second">
                         <p><span id="war">Війна</span> , всі проекти на стоп. <br /> Починаю з агенції в Казахстані. <br /> На цей час вже маю 5 успішних кейсів<br />
                         </p>
                         <span>Лютий 2022</span>
                    </div>
                    <div className="experince__personal-consult">
                         <p>Звільнення з агенції. <br />  На рахунку вже 10+ <br /> успішних проектів <br /> та задоволені клієнти. </p>
                         <span>Серпень 2022</span>
                    </div>
                    <div className="experince__total-amount">
                         <p>Працюю самостійно, <br /> веду 7 проектів одночасно. <br /> Кейси з ROMI 2000+ %</p>
                         <span>Жовтень 2022</span>
                    </div>
               </div> 
               {
                    currentSrolledHeight < 5575 ? <div className="experince__cover" ref={coverBlockRef}></div> : null
               }
                           
          </div>
     );
};

export default Experience;
import { useState } from "react";

import classNames from "classnames";

import "./experience.scss";

const Experience = ( {coverBlockRef, currentSrolledHeight, isDeletedCovering} ) => {

     return (
          <div className="experince">
               <h3>Мій досвід</h3>
               <div className="experince__wrapper">
                    <div className="experince__atom">
                         <p>Університет "Атом"</p>
                         <span>грудень 2021</span>
                    </div>
                    <div className="experince__first-client">
                         <p>Перший клієнт</p>
                         <span>квітень 2021</span>
                    </div>
                    <div className="experince__info-chigans">
                          <p>Курс від ТОП таргетологів</p>
                         <span>травень 2021</span>
                    </div>
                    <div className="experince__agency-first">
                         <p>Робота в агенстві <br />
                              "Білий трафік"</p>
                         <span>липень 2021</span>
                    </div>
                    <div className="experince__agency-second">
                         <p>Робота в агенстві<br />
                              "Чорний трафік"</p>
                         <span>червень 2021</span>
                    </div>
                    <div className="experince__personal-consult">
                         <p>Робота з наставником <br />
                         Бандерой Алиной </p>
                         <span>серпень 2021</span>
                    </div>
                    <div className="experince__total-amount">
                         <p>Робота з 7+ проектами      </p>
                         <span>вересень 2021</span>
                    </div>
               </div> 
               {
                    currentSrolledHeight < 4503 && !isDeletedCovering? <div className="experince__cover" ref={coverBlockRef}></div> : null
               }
                           
          </div>
     );
};

export default Experience;
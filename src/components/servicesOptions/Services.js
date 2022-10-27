import { useState } from "react";
import classNames from "classnames";
import { v4 as uuidv4 } from 'uuid';

import { ServiceContent } from "../transponder";

import "./services.scss";

const Services = ({handleOpeningForm}) => {
     const [serviceContent, setServiceContent] = useState("target");

     const serviceContentData = [
          {  
               title: "Таргетована реклама",
               service: ["Налаштування реклами",
               "Оптимізація витрат", "Тестовий період"],
               type: "target",
               thumbs: ["target1.jpg", "target2.jpg", "target3.jpg", "target4.jpg", "target5.jpg"]
          },
          {
               title: "Персональна консультація",
               service: ["Допомога за рекламним кабінетом", "Тижнева підтримка після консультації", "Оптимізація реклами під вашу нішу"],
               type: "consult",
               thumbs: ["consult1.jpg", "consult2.jpg", "consult3.jpg"]
          }
     ];

     const classContentBlock = classNames("services__content-block content-block", {
          "content-block_target" : serviceContent === "target",
          "content-block_consult" : serviceContent === "consult",
     })


     const renderItemList = (arr) => {
          return (
               arr.map(({title,  type}, index) => {

                    const itemClass = classNames("services__item", {
                         "active" : serviceContent === type
                    });

                    const setFn = (type === "target") ?  () => setServiceContent("target") : () => setServiceContent("consult") ;

                    return (
                         <li 
                              className={itemClass}
                              key={uuidv4()}
                              onClick={setFn}
                         >
                              {title}
                              <span></span>
                         </li>
                    );
               })
          )
     }

     return (
          <div className="services">
               <h3 className="services__title">Мої послуги</h3>
               <ul className="services__list">
                    {
                         renderItemList(serviceContentData)
                    }
               </ul>
               <div className={classContentBlock}>
                    {
                         serviceContent === "target" 
                              ? <ServiceContent {...serviceContentData.find(item => item.type === "target")}  handleOpeningForm={handleOpeningForm}/>  
                              : <ServiceContent {...serviceContentData.find(item => item.type === "consult")} handleOpeningForm={handleOpeningForm}/>
                    }
               </div>
          </div>
     );
};

export default Services ;
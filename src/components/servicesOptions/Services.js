import { useState } from "react";
import classNames from "classnames";
import { v4 as uuidv4 } from 'uuid';
import { useTransition, animated, config } from "react-spring";

import { Button, SliderService } from "../transponder";

import "./services.scss";

const Services = ({handleOpeningForm}) => {
     const [serviceContent, setServiceContent] = useState("target");
     const [serviceContentData, setServiceContentData] = useState([
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
     ])

     const transitions = useTransition(serviceContent, {
          from: {opacity: 0,transform: "translateY(-50%) scale(0.4)"},
          enter: {opacity: 1, flex: "0 0 400px" , transform: "translateY(0%) scale(1)"},
          leave: { opacity: 0, transform: "translateY(50%) scale(0.4)",  position: "absolute"},
          reverse: serviceContent,
          config: {
               duration: 500
          }
     });

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
                              onClick={() => setFn()}
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
               <>
                    {
                         transitions((style, serviceContent) => (
                              serviceContent === "target" ? (<animated.div
                                             style={{
                                                  ...style
                                             }}
                                             className={classContentBlock}>
                                             <div
                                                  className='content-block__first-col'>
                                                  <div className="content-block__wrapper">
                                                       <h4 className="content-block__title">{serviceContentData.find(item => item.type === "target").title}</h4>
                                                       <ul className="content-block__list">
                                                            {
                                                                 serviceContentData.find(item => item.type === "target").service.map((item) => {
                                                                      return (
                                                                           <li className="content-block__item" key={uuidv4()}>{item}</li>
                                                                      )
                                                                 })
                                                            }
                                                       </ul> 
                                                  </div>
                                                  <Button children={"Напиcати"} handleOpeningForm={handleOpeningForm} yellBorder/>
                                             </div>
                                             <div 
                                                  className='content-block__second-col'
                                             >
                                                  <h4 className="content-block__title">Відгуки</h4>
                                                  <div className="content-block__btn-block">
                                             </div>
                                                  <SliderService thumbs={serviceContentData.find(item => item.type === "target").thumbs}/>
                                             </div>
                                        </animated.div>)

                                   : (<animated.div 
                                        className={classContentBlock}
                                        style={{
                                             ...style
                                        }}
                                   >
                                        <div className='content-block__first-col'>
                                             <div className="content-block__wrapper">
                                                  <h4 className="content-block__title">{serviceContentData.find(item => item.type === "consult").title}</h4>
                                                  <ul className="content-block__list">
                                                       {
                                                            serviceContentData.find(item => item.type === "consult").service.map((item) => {
                                                                 return (
                                                                      <li className="content-block__item" key={uuidv4()}>{item}</li>
                                                                 )
                                                            })
                                                       }
                                                  </ul> 
                                             </div>
                                             <Button children={"Напиcати"} handleOpeningForm={handleOpeningForm} yellBorder/>
                                        </div>
                                        <div 
                                             className='content-block__second-col'>
                                             <h4 className="content-block__title">Відгуки</h4>
                                             <div className="content-block__btn-block">
                                        </div>
                                             <SliderService thumbs={serviceContentData.find(item => item.type === "consult").thumbs}/>
                                        </div>
                                   </animated.div>
                                   )    
                              )
                         )
                    }
               </>
          </div>
     );
};

export default Services ;

// boolean ? <AnimatedServiceContent opacity={opacity} {...serviceContentData.find(item => item.type === "target")}  handleOpeningForm={handleOpeningForm}/>
// : <AnimatedServiceContent opacity={opacity} {...serviceContentData.find(item => item.type === "consult")} handleOpeningForm={handleOpeningForm}/>
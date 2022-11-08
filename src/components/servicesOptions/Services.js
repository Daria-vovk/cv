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
               title: "Налаштування та ведення реклами",

               service: ["Aналіз сторінки/сайту", "Аналіз конкурентів", "Розробка рекламної стратегії",
                    "Підготовка рекламного кабінету до запуску", "Розробка рекламних макетів", "Написання текстів",
                    "Запуск тестових рекламних кампаній", "Масштабування результатів"
               ],
               type: "target",
               thumbs: ["target1.jpg", "target2.jpg", "target3.jpg", "target4.jpg", "target5.jpg"]
          },
          {
               title: "Консультація",
               list: ["Консультація-навчання", "Консультація по технічним питанням"],
               items: {
                    learn: [
                         "Проходить в ZOOM під запис, який потім надсилаю Вам",
                         "Tривалість 1-1,5 години", "Міні-навчання по налаштуванню реклами у вашій ніші",
                         "Розбір ваших запитань", "Підтримка в особистому чаті протягом 5 днів після консультації"
                    ],
                    technical: [
                         "Відео-формат/ віддалений доступ",
                         "Тривалість: залежить від складності",
                         "Розбір ваших запитань",
                         "Допомога з технічними неполадками, блокуваннями"
                    ]
               },
               type: "consult",
               thumbs: ["consult1.jpg", "consult2.jpg", "consult3.jpg"]
          }
     ])

     const transitions = useTransition(serviceContent, {
          from: {opacity: 0,transform: "translateY(-50%) scale(0.4)"},
          enter: {opacity: 1, transform: "translateY(0%) scale(1)"},
          leave: { opacity: 0, transform: "translateY(150%) scale(0.4)",  position: "absolute"},
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

     const targetContent = serviceContentData.find(item => item.type === "target");
     const consultContnt = serviceContentData.find(item => item.type === "consult");

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
                                                       <h4 className="content-block__title">{targetContent.title}</h4>
                                                       <ul className="content-block__list">
                                                            {
                                                                 targetContent.service.map((item) => {
                                                                      return (
                                                                           <li className="content-block__item" key={uuidv4()}>{item}</li>
                                                                      )
                                                                 })
                                                            }
                                                       </ul> 
                                                  </div>
                                                  <Button children={"Дізнатися ціну"} handleOpeningForm={handleOpeningForm} yellBorder/>
                                             </div>
                                             <div 
                                                  className='content-block__second-col'
                                             >
                                                  <h4 className="content-block__title">Відгуки</h4>
                                                  <div className="content-block__btn-block">
                                             </div>
                                                  <SliderService thumbs={targetContent.thumbs}/>
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
                                                  <h4 className="content-block__title">{consultContnt.title}</h4>
                                                  <ul className="content-block__list">
                                                      <span>1. {consultContnt.list[0]}</span>
                                                       {
                                                            consultContnt.items.learn.map((item) => {
                                                                 return (
                                                                      <li className="content-block__item content-block__item_consult" key={uuidv4()}>{item}</li>
                                                                 )
                                                            })
                                                       }
                                                  </ul>
                                                  <ul className="content-block__list">
                                                      <span>2. {consultContnt.list[1]}</span>
                                                       {
                                                            consultContnt.items.technical.map((item) => {
                                                                 return (
                                                                      <li className="content-block__item content-block__item_consult" key={uuidv4()}>{item}</li>
                                                                 )
                                                            })
                                                       }
                                                  </ul> 
                                             </div>
                                             <Button children={"Дізнатися деталі"} handleOpeningForm={handleOpeningForm} yellBorder/>
                                        </div>
                                        <div 
                                             className='content-block__second-col'>
                                             <h4 className="content-block__title">Відгуки</h4>
                                             <div className="content-block__btn-block">
                                        </div>
                                             <SliderService thumbs={consultContnt.thumbs}/>
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
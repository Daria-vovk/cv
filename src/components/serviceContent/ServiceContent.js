import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';

import { Button, SliderService } from '../transponder';

import "./serviceContent.scss";


const ServiceContent = ({title, service, thumbs, handleOpeningForm, styleProps}) => {

     const renderService = (arrService) => {
          return arrService.map(item => {
               return (
                    <li className="content-block__item" key={uuidv4()}>{item}</li>
               )
          });
     }
     

     return (
          <>
               <div
                    className='content-block__first-col'>
                    <div className="content-block__wrapper">
                         <h4 className="content-block__title">{title}</h4>
                         <ul className="content-block__list">
                              {
                                   renderService(service)
                              }
                         </ul> 
                    </div>
                    <Button children={"Напиcати"} handleOpeningForm={handleOpeningForm} yellBorder/>
               </div>
               <div className='content-block__second-col'>
                    <h4 className="content-block__title">Відгуки</h4>
                    <div className="content-block__btn-block">
               </div>
                    <SliderService thumbs={thumbs}/>
               </div>
          </>
     );
};

export default ServiceContent ;
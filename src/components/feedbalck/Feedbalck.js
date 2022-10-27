import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import "./feedBack.scss";

const Feedbalck = () => {
     const [feedBacks, setFeedBacks] = useState([ 
                                        {path: "big1.jpg", title: "Social Networking"},
                                        {path: "big2.jpg", title: "Beauty nails"},
                                        {path: "small.jpg", title: "E-commerce pillow shop"},
                                   ]);


     const renderFeed = (arrFeedBack) => {
          
          return arrFeedBack.map( ({path, title}) => {
               const imagePath = process.env.PUBLIC_URL + `/${path}`;
               console.log(imagePath)

               return (
                    <div className="feedback__block">
                         <img src={imagePath} alt="Фото відгука" className="feedback" />
                         <h6 className="feedback__title">{title}</h6>
                    </div>
               );
          });
     };

     return (
          <div className="feedback">
               {
                    renderFeed(feedBacks)
               }
          </div>
     );
};

export default Feedbalck;
import { useState } from "react";

import classNames from "classnames";
import { v4 as uuidv4 } from 'uuid';



const Socials = () => {
     const [socials, setSocials] = useState([ 
          {name: "fb", link: "https://ru-ru.facebook.com/people/%D0%94%D0%B0%D1%80%D1%96%D1%8F-%D0%92%D0%BE%D0%B2%D0%BA/100082836740229/", type: "string"},
          {name: "inst", link: "https://www.instagram.com/dariia_vovk/",  type: "string"},
          {name: "whtup", link: "tel:+380963276820",  type: "number"},
          {name: "mail", link: "mailto:skaretskiy1999@gmail.com",  type: "mail"},
          // {name: "linkIn", link: "nothing",  type: "nothing"},
     ]);

     const renderSocials = (arrOfSocials) => {

          return arrOfSocials.map(({name, link, type}) => {
               const classSocial = classNames("header__social-media", {
                    "header__social-media_fb": name === "fb",
                    "header__social-media_inst": name === "inst",
                    "header__social-media_whtup": name === "whtup",
                    "header__social-media_linkIn": name === "linkIn",
                    "header__social-media_mail": name === "mail"
               });

               return (
                    <li className={classSocial} key={uuidv4()} datakey={type}>
                         <a href={link}></a>
                    </li> 
               );
          });
     };
     
     return (
          <>
               {    
                    renderSocials(socials)
               }
          </>
     );
};

export default Socials;
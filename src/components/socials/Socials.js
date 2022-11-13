import { useState } from "react";

import classNames from "classnames";
import { v4 as uuidv4 } from 'uuid';



const Socials = () => {
     const [socials, setSocials] = useState([ 
          {name: "fb", link: "https://www.facebook.com/targetolog.dariia", type: "fb"},
          {name: "inst", link: "https://www.instagram.com/dariia_vovk/",  type: "inst"},
          {name: "whtup", link: "https://wa.me/380963276820",  type: "whtup"},
          {name: "telegram", link: "https://t.me/dariia_vovk", type: "telegram"}

          // Раніше використовувались також. Теперь щоб їх додати потрібно втсновити картинки та задати стилі
          // {name: "mail", link: "mailto:dariyavovk1012@gmail.com",  type: "mail"},
          // {name: "linkIn", link: "nothing",  type: "nothing"},
     ]);

     const renderSocials = (arrOfSocials) => {

          return arrOfSocials.map(({name, link, type}) => {
               const classSocial = classNames("header__social-media", {
                    "header__social-media_fb": name === "fb",
                    "header__social-media_inst": name === "inst",
                    "header__social-media_whtup": name === "whtup",
                    "header__social-media_linkIn": name === "linkIn",
                    "header__social-media_telegram": name === "telegram",
               });

               return (
                    <li 
                         className={classSocial} 
                         key={uuidv4()} 
                         datakey={type} 
                         datakind={name}
                    >
                         <a 
                              href={link}
                         >
                         
                         </a>
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
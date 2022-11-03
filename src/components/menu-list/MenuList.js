import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { Button } from "../transponder";


const MenuList = ({handleBurger}) => {

     const [pages, setPages] = useState([
          {
               name: "Головна",
               section: ".main-page__left-side"
          },
          {
               name: "Проекти",
               section: ".main-page__my-project-title"
          },
          {
               name: "Мої послуги",
               section: ".services__title"
          },
          {
               name: "Мій досвід",
               section: ".experince"
          }
     ]);

     const { setIsBurger, isBurger } = handleBurger;

     const renderPagesList = (arrOfNames) => {

          return arrOfNames.map(({name, section}) => {
          
               return (
                    <Button 
                         key={uuidv4()} 
                         section={section} 
                         handleBurger={{setIsBurger, isBurger}}
                         isMenu 
                    >
                         {name}
                    </Button>
               )
          });
     };


     return (
          <>
               {
                    renderPagesList(pages)
               }
          </>
     );
};

export default MenuList;
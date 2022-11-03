const BurgerMenu = () => {
     return (
          <nav 
               className="right-burger__body"
          >
               <ul 
                    className="right-burger__menu"
               >
                    {
                         renderPagesList(pages)
                    }
               </ul>
          </nav>
     );
};

export default BurgerMenu;

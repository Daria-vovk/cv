import classNames from "classnames";

import "./button.scss";

const Button = ({ 
          children,
          isMenu,
          isYellow,
          isWhiteBorder,
          pseuElem,
          isCarts,
          yellBorder,
          isShowMore,
          handleClick, 
          handleOpeningForm, 
          handleAddCart,
          disabled,
          section,
          handleBurger,
          loading
     }) => {

     const customization = classNames("button btn-default", {
          "btn-yellow": isYellow,
          "btn-white-border": isWhiteBorder,
          "right-burger__pages-item": isMenu,
          "btn-pseudo": pseuElem,
          "btn-cart-btn": isCarts,
          "btn-yell-border": yellBorder,
          "btn-show-more": isShowMore,
          "isLoadingForm" : loading
     });

     return (
          <button 
               className={customization}
               onClick={(e) => {

                    if (e.target.classList.contains("btn-yell-border") || e.target.classList.contains("btn-pseudo")) {
                         handleOpeningForm(true)
                         document.body.classList.add("_lock");
                    } else if (e.target.classList.contains("btn-show-more")) {
                         handleAddCart()
                    } else if (e.target.classList.contains("right-burger__pages-item")) {
                         e.stopPropagation();

                         const {isBurger, setIsBurger} = handleBurger;
                         
                         document.querySelector(section).scrollIntoView({behavior: "smooth"});

                         if (isBurger) {
                              setIsBurger(!isBurger);
                              document.body.classList.remove("_lock");
                         }
                         
                    } else {
                         handleClick(e)
                    } 
                    
               } }
               disabled={disabled}
          >
               {children}
          </button>
     );
};

export default Button;
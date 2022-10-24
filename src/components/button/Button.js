import classNames from "classnames";

import "./button.scss";

const Button = ({ children, isMenu, isYellow, isWhiteBorder, pseuElem, isCarts, yellBorder,isShowMore, handleClick, handleOpeningForm, handleAddCart }) => {

     const customization = classNames("button btn-default", {
          "btn-yellow": isYellow,
          "btn-white-border": isWhiteBorder,
          "right-burger__pages-item": isMenu,
          "btn-pseudo": pseuElem,
          "btn-cart-btn": isCarts,
          "btn-yell-border": yellBorder,
          "btn-show-more": isShowMore
     });

     return (
          <button 
               className={customization}
               onClick={(e) => {
                    if (e.target.classList.contains("btn-yell-border")) {
                         handleOpeningForm()
                    } else if (e.target.classList.contains("btn-show-more")) {
                         handleAddCart()
                    } else {
                         handleClick(e)
                    } 
                    
               } }
          >
               {children}
          </button>
     );
};

export default Button;
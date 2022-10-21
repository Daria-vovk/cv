import classNames from "classnames";

import "./button.scss";

const Button = ({ children, isMenu, isYellow, isWhiteBorder, pseuElem, isCarts, yellBorder }) => {

     const customization = classNames("button btn-default", {
          "btn-yellow": isYellow,
          "btn-white-border": isWhiteBorder,
          "right-burger__pages-item": isMenu,
          "btn-pseudo": pseuElem,
          "btn-cart-btn": isCarts,
          "btn-yell-border": yellBorder
     });

     return (
          <button className={customization}>
               {children}
          </button>
     );
};

export default Button;
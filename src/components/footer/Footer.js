import icon from "../../assets/footer/Group11.svg";

import "./footer.scss";

const Footer = () => {

     return (
          <footer className="footer">
               <div className="footer__container _container">
                    <ul className="footer__left-side">
                         <li className="header__social-media header__social-media_fb"></li>
                         <li className="header__social-media header__social-media_inst"></li>
                         <li className="header__social-media header__social-media_whtup"></li>
                         <li className="header__social-media header__social-media_linkIn"></li>
                    </ul>
                    <div className="footer__rights">
                         <img src={icon} alt="иконка копирайта" /> <span>Скарецький Євген</span>
                    </div>
               </div>
          </footer>
     );
};

export default Footer ;
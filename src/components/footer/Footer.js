import Socials from "../socials/Socials";
import icon from "../../assets/footer/Group11.svg";

import "./footer.scss";

const Footer = () => {

     return (
          <footer className="footer">
               <div className="footer__container _container">
                    <ul className="footer__left-side">
                         <Socials/>
                    </ul>
                    <div className="footer__rights">
                         <img src={icon} alt="иконка копирайта" /> <span>Скарецький Євген</span>
                    </div>
               </div>
          </footer>
     );
};

export default Footer ;
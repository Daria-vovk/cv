import Header from '../Header/Header';
import { MainPage } from '../Pages';
import Footer from '../footer/Footer';
import GiftPopup from '../gift-popup/GiftPopup';

import gift from "../../assets/mainPage/gift.png";


import './App.scss';


function App() {
     return (
          <>
               <Header />
               <main className="page__main-page _container">
                    <img src={gift} alt="Іконка подарунку" className="main-page__gift-icon" />
                    <MainPage />
               </main>
               <Footer/>
               <GiftPopup/>
          </>
     );
}

export default App;

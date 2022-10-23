import Header from '../Header/Header';
import { MainPage } from '../Pages';
import Footer from '../footer/Footer';



import './App.scss';


function App() {
     return (
          <>
               <Header />
               <main className="page__main-page _container">
                    <MainPage />
               </main>
               <Footer/>
          </>
     );
}

export default App;

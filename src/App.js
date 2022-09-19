import React, { useState } from 'react'
import { useEffect } from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AllPage from './Components/AllPage/AllPage';
import Toasts from "./Components/Toasts/Toasts";
import BagCart from './Components/BagCart/BagCart'
import LoginSidebar from "./Components/LoginSidebar/LoginSidebar";
import Modals from './Components/Modal/Modal';
import ErrorMessage from './Components/ErrorMessage/ErrorMessage';
import { ProductsProvider } from './Contexts/ProductContext'
import { ProposalProductsProvider } from "./Contexts/ProposalProductContext";
import { MobileNavProvider } from './Contexts/MobailNavDataContext';
import { UsersProvider } from "./Contexts/UsersContext";
import { ArticleDataProvider } from './Contexts/ArticleDataContext';
import MobileNav from './Components/MobileNav/MobileNav';
import { IoIosArrowUp } from 'react-icons/io'

import './App.css'


export default function App() {
  const [scrollToTopBtn, setScrollToTopBtn] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      setScrollToTopBtn(window.scrollY)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div  >
      <MobileNavProvider>
        <ArticleDataProvider>
          <ProductsProvider>
            <ProposalProductsProvider>
              <UsersProvider>
                <button className={`Btn-ScrollTop ${scrollToTopBtn > 500 ? 'Show-ScrollTop' : ''}`} onClick={() => window.scrollTo(0, 0)}><IoIosArrowUp size={30} /></button>
                <MobileNav />
                <Modals />
                <BagCart />
                <LoginSidebar />
                <Toasts />
                <Header />
                <AllPage />
                <Footer />
                <ErrorMessage />
              </UsersProvider>
            </ProposalProductsProvider>
          </ProductsProvider>
        </ArticleDataProvider>
      </MobileNavProvider>
    </div>
  )
}



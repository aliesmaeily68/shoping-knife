import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AllPage from './Components/AllPage/AllPage';
import Toasts from "./Components/Toasts/Toasts";
import BagCart from './Components/BagCart/BagCart'
import LoginSidebar from "./Components/LoginSidebar/LoginSidebar";
import Modals from './Components/Modal/Modal';
import { ProductsProvider } from './Contexts/ProductContext'
import { ProposalProductsProvider } from "./Contexts/ProposalProductContext";
import { MobileNavProvider } from './Contexts/MobailNavDataContext';
import { UsersProvider } from "./Contexts/UsersContext";
import { ArticleDataProvider } from './Contexts/ArticleDataContext';
import MobileNav from './Components/MobileNav/MobileNav';

import './App.css'


export default function App() {


  return (
    <MobileNavProvider>
      <ArticleDataProvider>
        <ProductsProvider>
          <ProposalProductsProvider>

            <UsersProvider>
              <MobileNav />
              <Modals />
              <BagCart />
              <LoginSidebar />
              <Toasts />
              <Header />
              <AllPage />
              <Footer />

            </UsersProvider>

          </ProposalProductsProvider>
        </ProductsProvider>
      </ArticleDataProvider>
    </MobileNavProvider>

  )
}



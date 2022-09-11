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
import { UsersProvider } from "./Contexts/UsersContext";
import { ArticleDataProvider } from './Contexts/ArticleDataContext';

import './App.css'


export default function App() {


  return (
    <ArticleDataProvider>
    <ProductsProvider>
      <ProposalProductsProvider>
        <UsersProvider>
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

  )
}



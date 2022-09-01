import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AllPage from './Components/AllPage/AllPage';
import Toasts from "./Components/Toasts/Toasts";
import BagCart from './Components/BagCart/BagCart'
import LoginSidebar from "./Components/LoginSidebar/LoginSidebar";
import { ProductsProvider } from './Contexts/ProductContext'
import { ProposalProductsProvider } from "./Contexts/ProposalProductContext";
import { UsersProvider } from "./Contexts/UsersContext";

import './App.css'


export default function App() {


  return (
    <ProductsProvider>
      <ProposalProductsProvider>
        <UsersProvider>
          <BagCart />
          <LoginSidebar />
          <Toasts />
          <Header />
          <AllPage />
          <Footer />
        </UsersProvider>
      </ProposalProductsProvider>
    </ProductsProvider>

  )
}



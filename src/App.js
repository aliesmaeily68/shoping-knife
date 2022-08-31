import { useRoutes } from "react-router-dom";
import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import route from './routes'
import BagCart from './Components/BagCart/BagCart'
import LoginSidebar from "./Components/LoginSidebar/LoginSidebar";
import { ProductsProvider } from './Contexts/ProductContext'
import { ProposalProductsProvider } from "./Contexts/ProposalProductContext";
import Toasts from "./Components/Toasts/Toasts";
import './App.css'


export default function App() {
  let routes = useRoutes(route)
  return (
    <ProductsProvider>
      <ProposalProductsProvider>
        <BagCart />
        <LoginSidebar />
        <Toasts />
        <Header />
        {routes}
        <Footer />
      </ProposalProductsProvider>
    </ProductsProvider>

  )
}



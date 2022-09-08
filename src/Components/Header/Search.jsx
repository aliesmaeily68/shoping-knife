import React from 'react'
import {GoSearch} from 'react-icons/go'
import { useContext } from "react";
import { AllProductContext } from "../../Contexts/ProductContext";
import { UsersContext } from "../../Contexts/UsersContext";

import './Search.css'

export default function () {
  const DataContext = useContext(AllProductContext);
  const DataUserContexte = useContext(UsersContext);
  const SearchHandler = () => {
    DataContext.setShowCartBag(false);
    DataUserContexte.setShowLoginSidebar(false);
  }
  return (
    <div className='Search'  onClick={()=>SearchHandler()}>
        <input type="text"className='Search-Input' placeholder='جستجو ...' />
        <div className='Search-Icon'><GoSearch /></div>
    </div>
  )
}

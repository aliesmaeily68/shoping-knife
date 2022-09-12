import React, { useContext } from "react";
import {AiOutlineHeart} from 'react-icons/ai'
import {TbArrowsShuffle} from 'react-icons/tb'
import {FaRegUser} from 'react-icons/fa'
import { NavLink } from "react-router-dom";
import './MobileNavMenu.css'
import { AllMobileNavContext } from "../../Contexts/MobailNavDataContext";

export default function MobileNavMenu() {
  const DataMobileNavContext=useContext(AllMobileNavContext)
  const CloseMobileNav=()=>{
    DataMobileNavContext.setShowMobileNav(false)
  }
  return (
    <>
      {" "}
      <ul className="ListGroup-MobileNav">
        <li>
          <NavLink to={'/'} onClick={()=>CloseMobileNav()}>خانه</NavLink>
        </li>
        <li>
          <NavLink to={'/product'} onClick={()=>CloseMobileNav()}>فروشگاه</NavLink>
        </li>
        <li>
          <NavLink to={'/article'} onClick={()=>CloseMobileNav()}>مقالات</NavLink>
        </li>
        <li>
          <NavLink to={'/about'} onClick={()=>CloseMobileNav()}>درباره ما</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'} onClick={()=>CloseMobileNav()}>تماس باما</NavLink>
        </li>
        <li>
          <NavLink to={'/favorites'} onClick={()=>CloseMobileNav()}><AiOutlineHeart />علاقه مندی </NavLink>
        </li>
        <li>
          <NavLink to={'/comparison'} onClick={()=>CloseMobileNav()}><TbArrowsShuffle />مقایسه</NavLink>
        </li>
        <li>
          <NavLink to={'/login-register'} onClick={()=>CloseMobileNav()}><FaRegUser />ورود/ثبت نام</NavLink>
        </li>
      </ul>
    </>
  );
}

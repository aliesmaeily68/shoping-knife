import React from 'react'
import HeaderTop from './HeaderTop'
import NavBar from './NavBar'
import './Header.css'

export default function Header() {
  return (
    <header className='header'>
        <HeaderTop />
        <NavBar />
    </header>
  )
}

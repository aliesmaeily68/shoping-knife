import React from 'react'
import FooterTop from './FooterTop/FooterTop'
import FooterBody from './FooterBody/FooterBody'
import FooterBottom from './FooterBottom/FooterBottom'
import './Footer.css'


export default function Footer() {
  return (
    <div className='Main-Footer'>
      <FooterTop />
      <FooterBody />
      <FooterBottom />
    </div>
  )
}

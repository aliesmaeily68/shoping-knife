import React, { useState } from 'react'
import Logo from '../../Header/Logo'
import FooterTitle from './FooterTitle'
import Social from './Social'
import './FooterTop.css'

export default function FooterTop() {
    const [logoName ,SetLogoName]=useState('LOGO')
  return (
    <div>
        <div className="Container-FooterTop">
          <div className="wrapper-FooterTop">
            <div className="Logo-FooterTop"><Logo logoName={logoName} /></div>
            <div className="Title-FooterTop"><FooterTitle /></div>
            <div className="Social-FooterTop"><Social /></div>
          </div>
        </div>
    </div>
  )
}

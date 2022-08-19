import React, { useState } from 'react'
// import { Container,Row,Col } from 'react-bootstrap'
import Logo from '../../Header/Logo'
import FooterTitle from './FooterTitle'
import Social from './Social'
import './FooterTop.css'

export default function FooterTop() {
    const [logoName ,SetLogoName]=useState('LOGO-DARK')
  return (
    <div>
        {/* <Container >
            <Row>
                <Col md={3}><Logo logoName={logoName} /></Col>
                <Col md={6}><FooterTitle /></Col>
                <Col md={3}><Social /></Col>
            </Row>
        </Container> */}
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

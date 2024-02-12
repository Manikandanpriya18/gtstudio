import React from 'react';
import { Button, Row, Container, Col, Navbar } from "react-bootstrap";
import Facebook from '../Image/facebook.png';
import Instagram from '../Image/Instagram_icon.png'
import LinkedIn from "../Image/social.png";
import Twitter from "../Image/twitter.png";
function Footericon() {
  return (
    <div>
    <section>
    <Container fluid className="footerlink">
        <Row>
        <div className='d-flex jusity-content-center footericon'>
    
      <a href="#"><img src={Facebook} alt='Facebook' title='Facebook' className="footericon"/></a>
      <a href="#"><img src={Instagram} alt='Instagram' title='Instagram' className="footericon"/></a>
      <a href="#"><img src={LinkedIn} alt='LinkedIn' title='LinkedIn' className="footericon"/></a>
      <a href="#"><img src={Twitter} alt='Twitter' title='Twitter' className="footericon"/></a>
      </div>
        </Row>
      </Container>
    </section></div>
  )
}

export default Footericon
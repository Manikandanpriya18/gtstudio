import React from 'react'
import { Button, Row, Container, Col, Navbar } from "react-bootstrap";
import Racecourse from "../Image/Racecourse.jpg";
import Navaindia from "../Image/mayflower.jpg";

function Footersection() {
  return (
    <div><section>
    <footer>
      <Container fluid>
        <div>
          <div className="d-flex justify-content-left">
            <h1 className="heading">Our Branches</h1>
          </div>
          <Row>
            <Col xs={12} md={6} xl={6} className="footerdetail">
              <img src={Racecourse} className="footerimage" title='Race Course Branch(RCB)'  alt="Race Course Branch(RCB)"/>
              <h1 className="highligth">Race Course Branch(RCB)</h1>
              <p>
                Address:-A4, Rathinam Circle View, <br />
                Race Course, Coimbatore,
                <br />
                Tamil Nadu- 641018
              </p>
              <span>Phone:-8667641134</span>
            </Col>
            <Col xs={12} md={6} xl={6} className="footerdetail">
              <img src={Navaindia} className="footerimage" alt="Nava India Branch(NIB)" title="Nava India Branch(NIB)" />
              <h1 className="highligth">Nava India Branch(NIB)</h1>
              <p>
                Address:-No.336/2, 6th Floor, <br />
                Mayflower Valencia, Nava India,
                <br />
                Peelamedu, Coimbatore, Tamil Nadu - 641004
              </p>
              <span>Phone:-8667390454</span>
            </Col>
          </Row>
        </div>
      </Container>
      
    </footer>
  </section></div>
  )
}

export default Footersection
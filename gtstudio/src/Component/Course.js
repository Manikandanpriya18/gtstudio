import React from 'react'
import { Button, Row, Container, Col, Navbar } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Music from "../Image/Musicimg.jpg";
import frontendweb from "../Image/frontendweb.png";
import Fullstackmobile from "../Image/fullstackmobile.png";
import Story from "../Image/Books.jpg";

function Course() {
  return (
    <div><section>
    <Container fluid>
      <Row>
        <div className="Coursesection">
          <div className="d-flex justify-content-left">
            <h1 className="heading">Recommended:</h1>
           
          </div>
          <div className="d-flex justify-content-left">
          <span className="subheading">Our App gives you the comfortability & Support at the right time</span>
          </div>
          <Container fluid className="coursecontent">
            <Row>
              
                <Col xs={12} md={6} xl={6} className="coursedetail">
             
                    <Card className="coursedetailbackground">
                      <Card.Img variant="top" src={Music}  className="recommended"/>
                    
                        <a href='#' className='recommendedheading'>Story</a>
                        
                     
                    </Card>
             
                </Col>
                <Col xs={12} md={6} xl={6} className="coursedetail">
                  <Card className="coursedetailbackground">
                    <Card.Img variant="top" src={Story} className="recommended"/>
                    <a href='#' className='recommendedheading'>Education</a>
                   
                  </Card>
                </Col>
              
              
              
             
            </Row>
          </Container>
        </div>
      </Row>
    </Container>
  </section></div>
  )
}

export default Course
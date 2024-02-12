import React from "react";
import { Button, Row, Container, Col, Navbar } from "react-bootstrap";
import logo from "../Image/logo.png";
import { Link } from 'react-router-dom'

function Topbar() {
  return (
    <div>
      <Container fluid>
        <Row>
          <section>
            <div className="d-flex align-items-center fixed-top bgcolor">
              <Col>
              <Link to="/"><img src={logo} alt="Banner" title="Logo" className="logo" /></Link>
              </Col>
              <Col>
                <div className="d-flex justify-content-end align-items-center">
                <Link to="/Developer"><button type="button" class="btn btn-dark btn-lg">Developer</button></Link>
                    
                  
                </div>
              </Col>
            </div>
          </section>
        </Row>
      </Container>
    </div>
  );
}

export default Topbar;

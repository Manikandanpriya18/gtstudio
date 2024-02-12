import React from 'react';
import { Button, Row, Container, Col, Navbar } from "react-bootstrap";
import logo from "../Image/logo.png";

function Aboutus() {
  return (
    <div> <section>
    <div className="d-flex justify-content-left">
      <h1 className="heading">About GT Studio</h1>
    </div>

    <div className="about-session">
      <Container fluid>
        <Row>
          <div className="d-flex about-session-mobileview">
            <Col xs={12} md={8} xl={8}>
              <div className="aboutsesion-content">
                <p>
                  Welcome to <span className="highligth">GT Studio</span>
                  ,Crafted by the bright minds of
                  <span className="highligth"> GT SOFTWARE COLLEGE </span>
                  .Join our Student-led initiative as we delve into
                  captivating stories and insightful conversations.From
                  thought-provoking interviews with industry leaders to
                  immersive storytelling ,our diverse range of topics
                  reflects the curiosity and creativity of the next
                  generation .
                </p>

                <p>
                  At <span className="highligth"> GT SOFTWARE COLLEGE </span>
                  ,Our Students are not just learners;they are the
                  architects of knowledge,and <span className="highligth">GT Studio</span> is a testament to
                  their passion for exploring the world around them.Be part
                  of the journey as we share our unique perspectives ,engage
                  in discussions that matter,and bring you content that
                  blends entertainment with intellectual curiosity
                </p>

                <p>
                  Become a part of the 
                  <span className="highligth"> GT Studio </span>
                  Community,Where the energy of youth meets the depth of
                  thougth.Every episode is a collaborative endeavor,showcasing the brilliance of
                  <span className="highligth"> GT SOFTWARE COLLEGE </span>
                  Students .Embark on this exciting adventure with us ,where
                  the future of Storytelling is in the hands of the next
                  generation
                </p>
              </div>
            </Col>

            <Col xs={12} md={4} xl={4}>
              <div className="about-img">
                <img src={logo} alt="Logo" title="Logo" />
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  </section></div>
  )
}

export default Aboutus
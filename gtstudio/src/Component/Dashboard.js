import React from "react";
import { Button, Row, Container, Col, Navbar } from "react-bootstrap";
import Topbar from "./Topbar";
import Banner from "./Banner";
import Aboutus from "./Aboutus";
import Course from "./Course";
import Footersection from "./Footersection";
import Footericon from "./Footericon";




function Dashboard() {
  return (
    <>
      <Topbar />
      <Banner />
      <Aboutus />
      <Course />
      <Footersection/>
      <Footericon/>

      
    </>
  );
}

export default Dashboard;

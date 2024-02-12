import React from 'react';
import Banner1 from "../Image/Banner1.jpg";
import Banner2 from "../Image/Banner2.jpg";
import Banner3 from "../Image/Banner3.jpg";
import Banner4 from "../Image/Banner4.jpg";
import Banner5 from "../Image/banner5.png";
import Banner6 from "../Image/banner7.jpg";
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <div><section className="m-40">
    <Carousel className="maincarousel" interval={5000}>
   
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Banner2}
        alt="Banner2"
        title='Banner2'
      />
      {/* <Carousel.Caption className="carouseltext">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Banner3}
        alt="Banner3"
        title='Banner3'
      />
      {/* <Carousel.Caption className="carouseltext">
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption> */}
    </Carousel.Item>
    
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Banner5}
        alt="Banner5"
        title='Banner5'
      />
      {/* <Carousel.Caption className="carouseltext">
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={Banner6}
        alt="Banner6"
        title='Banner6'
      />
      {/* <Carousel.Caption className="carouseltext">
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption> */}
    </Carousel.Item>
  </Carousel>
    </section></div>
  )
}

export default Banner
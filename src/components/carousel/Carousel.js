// Package Imports
import React from 'react';
import {Row, Col, Carousel} from 'react-bootstrap';

function CarouselComp(props) {
  return (
    <div className="margin-top-fifteen">
      <Row>
        <Col xs={12}>
          <Carousel className="margin-top-fifteen carousel-custom-height">
            <Carousel.Item className="image-center">
              <img width={450} height={250} alt="Robert W. Hazel For Congress Image 01" src="assets/images/rober-w-hazel-01.jpeg" />
            </Carousel.Item>
            <Carousel.Item className="image-center">
              <img width={450} height={250} alt="Robert W. Hazel For Congress Image 02" src="assets/images/rober-w-hazel-02.jpeg" />
            </Carousel.Item>
            <Carousel.Item className="image-center">
              <img width={450} height={250} alt="Robert W. Hazel For Congress Image 04" src="assets/images/rober-w-hazel-04.jpeg" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </div>
  )
}

export default CarouselComp;

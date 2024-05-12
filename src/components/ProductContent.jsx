import React, { useState } from 'react';
import { Container, Row, Col, Image, Carousel, Button } from 'react-bootstrap';

function ProductContent() {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [
    'https://via.placeholder.com/800x600',
    'https://via.placeholder.com/800x600',
    'https://via.placeholder.com/800x600'
  ];

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <Container>
      <h1>Product Details</h1>
      <Row>
        <Col md={6}>
          <Carousel activeIndex={selectedImage}>
            {images.map((image, index) => (
              <Carousel.Item key={index} onClick={() => handleImageClick(index)}>
                <Image src={image} fluid />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={6}>
          <h2>Product Name</h2>
          <p>Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h3>$99.99</h3>
          <Button variant="primary">Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
}

export {ProductContent};

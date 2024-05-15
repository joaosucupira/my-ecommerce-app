import React, { useState } from 'react';
import { Container, Row, Col, Image, Carousel, Button } from 'react-bootstrap';
import { ProductCarousel } from './ProductCarousel';

function ProductContent() {

  return (
    <Container>
      <h1>Product Details</h1>
      <Row>
        <Col md={6}>
          <ProductCarousel/>
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

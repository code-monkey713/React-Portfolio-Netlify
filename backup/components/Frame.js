import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Frame = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col sm="2"></Col>
          <Col sm="8" className="">
            {props.children}
          </Col>
          <Col sm="2"></Col>
        </Row>
      </Container>
    </>
  );
};

export default Frame;

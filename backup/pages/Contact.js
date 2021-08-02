import { Container, Row, Col, Button } from 'react-bootstrap';
import Input from '../components/Input';

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col sm="2"></Col>
        <Col sm="8" className="">
          <h2>Contact Me</h2>
          <Input label="Name" />
          <Input label="Email" />
          <Input label="Comment" />
          <div className="mt-3">
            <Button> Press Me </Button>
          </div>
        </Col>
        <Col sm="2"></Col>
      </Row>
    </Container>
  );
};

export default Contact;

import { Container, Col, Row } from 'react-bootstrap';

const Portfolio = () => {
  return (
    <Container>
      
      {/* title of the page */}
      <Row className="mt-4">
        <Col sm={2} />
        <Col sm={8}>
          <h2>My Porfolio Projects</h2>
        </Col>
      </Row>

      {/* project cards start here */}
      <Row>
        <Col sm={2} />
        <Col sm={8}>
          <div className="row">
            <p>
              Pellentesque rhoncus a turpis sagittis luctus. Nulla placerat ex
              sed ipsum finibus rutrum in non ipsum. Aenean varius eu sem sed
              fringilla. In scelerisque lacus tempor, molestie mauris ac,
              gravida ante. Curabitur vel augue at mauris aliquam faucibus quis
              hendrerit magna. Integer nec est vel purus hendrerit auctor a at
              tortor. Nullam finibus nisi non faucibus luctus. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Donec consequat nisl at
              velit aliquet, nec placerat magna maximus. Phasellus bibendum erat
              sapien, non hendrerit elit blandit fermentum.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;

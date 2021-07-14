import React from 'react';
import { Container, Col, Row, Card, ListGroup } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <Container>
      <Row>
        <Col sm="1" md="2"></Col>
        <Col sm="8" className="">
          <h3 className="mb-3 mt-4">About Me</h3>
        </Col>
        <Row>
          <Col sm={1} md={2} lg={2}></Col>
          <Col sm={10} md={8} lg={8}>
            <Card>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Bio</Card.Title>
                <Card.Text>
                  Here is a brief history of my technical background and where I
                  came to be today. I started school to study in the field of
                  computer networking and management information systems. After
                  I received my Associate Degree, I was unable to find a job
                  during the time as a network engineer or network
                  administrator. I took up on a position as a software/hardware
                  support technician. I was working for HP/Compaq as a
                  contractor at the time.
                </Card.Text>
                <Card.Text>
                  After I left the position as support technician, I joined the
                  City of Houston as a customer service representative. I took
                  the position to help support my family. What started as a
                  temporary position, I rose up to be customer service lead.
                  During this time, the department was starting to implement a
                  new system for managing customer relations. With my background
                  in IT, I was offered to be a part of the team.
                </Card.Text>
                <Card.Text>
                  During this time, I was in the role of business analyst/IT
                  analyst to support the team to gather all the business
                  requirements and make it work with the current billing system
                  at the time. I was able to work as a trainer to some of my
                  team members so they can operate on the new system. I
                  eventually went on to be on the project management team to
                  support both the programmers and the business unit leaders to
                  successfully implement the new .NET system to work with the
                  current mainframe system. They were sending data with each
                  other with the setup of API as a middleman.
                </Card.Text>
                <Card.Text>
                  After the implementation was completed, we went on to migrate
                  the legacy billing system running on mainframe to fully online
                  .NET application running on Microsoft SQL. Again, during this
                  project I was on the project management team. I did work as
                  few other roles at the time to help fill in the gap while we
                  get new people to work on the project. I gained many
                  experiences during this time. The migration was successful.
                </Card.Text>
                <Card.Text>
                  I'm have completed a coding boot camp with Rice University for
                  web development to advanced my career. I'm currently working
                  full-time with the City of Houston as a Systems Support
                  Analyst.
                </Card.Text>
                <Card.Title>
                  Please visit my contact page for more information.
                </Card.Title>
                <Card.Text>
                  For more information on my professional career, please
                  reference my resume link below.
                </Card.Text>
                <ListGroup>
                  <ListGroup.Item>
                    <a href="https://www.linkedin.com/in/tony-tran-developer/">
                      <i className="fa fa-linkedin-square" aria-hidden="true" />{' '}
                      LinkedIn
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a href="https://github.com/code-monkey713">
                      <i className="fa fa-github" aria-hidden="true" /> GitHub
                    </a>
                  </ListGroup.Item>
                </ListGroup>
                <Card.Text className="mt-3">
                  A copy of my resume on a PDF can be downloaded below!
                </Card.Text>
                <ListGroup>
                  <ListGroup.Item>
                    <a
                      href="https://drive.google.com/file/d/1ibrJqSWSje9SrGEKczY8QqMJHOk152R4/view?usp=sharing"
                      rel="noreferrer"
                      target="_blank"
                    >
                      My Downloadable Resume PDF
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a href="mailto:tony.tran713@outlook.com">
                      <i className="fa fa-envelope" aria-hidden="true" />
                      tony.tran713@outlook.com
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={1} md={2} lg={2}></Col>
        </Row>
        <Col sm="1" md="2"></Col>
      </Row>
    </Container>
  );
};

export default AboutMe;

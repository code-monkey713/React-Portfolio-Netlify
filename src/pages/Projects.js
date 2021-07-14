import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import projectData from '../assets/projectData';

function Projects() {
  const projectList = projectData.map((data) => (
    <ProjectCard
      key={data.id}
      title={data.title}
      url={data.url}
      repository={data.repository}
      image={data.image}
      description={data.description}
      btn1="GitHub Repo"
      btn2="Deployed Link"
    />
  ));

  return (
    <Container>
      <Row className="">
        <Col sm={2} md={2} lg={2}></Col>
        <Col sm={8} md={8} lg={8}>
          <h3 className="mb-3">Projects</h3>
        </Col>
        <Col sm={2} md={2} lg={2}></Col>
      </Row>

      {/* creating project cards from mapped list */}
      <Row>
        <Col sm={2} md={2} lg={2}></Col>
        <Col sm={8} md={8} lg={8}>
          {projectList}
        </Col>
        <Col sm={2} md={2} lg={2}></Col>
      </Row>
    </Container>
  );
}

export default Projects;

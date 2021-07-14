import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProjectCard = (props) => {
  return (
    <Card className="mb-3">
      <Card.Header className="text-dark bold">{props.title}</Card.Header>
      <Card.Img
        className="project-card-img-top bodyBackground"
        variant="top"
        src={props.image}
      />
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="secondary" href={props.repository} className="mr-2">
          {props.btn1}
        </Button>
        <Button variant="secondary" href={props.url} className="">
          {props.btn2}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;

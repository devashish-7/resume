import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
            
              isBlog={false}
              title="Animal Care Website"
              description="Developed frontend end of the Animal Care website using Bootstrap, Html, CSS, Javascript and Jquery"
              link="https://github.com/devashish-7/animalcarewebsite"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="School Managment Website"
              description="Developed frontend end of the website using Bootstrap, Html, CSS, Javascript and Jquery"
              link="http://gurukulkurki.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Btvertos Club Website"
              description="Worked on creating the frontend-end and Back-end of the website using Bootstrap, Javascript, Php, MySql."
              link="https://btvertoss.000webhostapp.com/"
            />
          </Col>

         
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple"> Certification </strong>
        </h1>
        <p style={{ color: "white" }}>Do give a look to some of my Achivements</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              
              link=""
              title="React Certification"
              site="simplilearn.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              
              link=""
              title="Certified by RSKS in Community development Project"
              site=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

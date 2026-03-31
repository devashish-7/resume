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
      My Recent <strong className="purple">Projects</strong>
    </h1>
    <p style={{ color: "white" }}>
      Here are some DevOps and Cloud projects I’ve worked on.
    </p>

    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      
      <Col md={4} className="project-card">
        <ProjectCard
          isBlog={false}
          title="AWS Infrastructure Automation"
          description="Designed and deployed scalable AWS infrastructure using Terraform including VPC, EC2, RDS, S3, ALB, and security components with CI/CD integration."
          link="#"
        />
      </Col>

      <Col md={4} className="project-card">
        <ProjectCard
          isBlog={false}
          title="Kubernetes CI/CD Pipeline"
          description="Built and managed CI/CD pipelines using Jenkins for deploying containerized applications on Kubernetes with high availability and scalability."
          link="#"
        />
      </Col>

      <Col md={4} className="project-card">
        <ProjectCard
          isBlog={false}
          title="AWS WorkSpaces Automation"
          description="Automated AWS WorkSpaces deployment with secure SAML authentication, VPC setup, and scalable remote desktop infrastructure."
          link="#"
        />
      </Col>

      <Col md={4} className="project-card">
        <ProjectCard
          isBlog={false}
          title="GCP Employee Portal (Flask App)"
          description="Developed and deployed a Flask-based REST API application on GCP App Engine with Cloud SQL integration for employee management."
          link="#"
        />
      </Col>

      <Col md={4} className="project-card">
        <ProjectCard
          isBlog={false}
          title="Terraform Studio Automation"
          description="Automated infrastructure using Terraform Studio with GitLab workflows, Jenkins automation, and Docker image security improvements."
          link="#"
        />
      </Col>

    </Row>

    {/* CERTIFICATIONS */}
    <h1 className="project-heading">
      My <strong className="purple">Certifications</strong>
    </h1>
    <p style={{ color: "white" }}>
      Professional certifications validating my cloud and DevOps expertise.
    </p>

    <Row style={{ justifyContent: "center" }}>

      <Col md={4} className="blog-card">
        <BlogCard
          title="GCP Professional Cloud Architect"
          site="Google Cloud"
          link="#"
        />
      </Col>

      <Col md={4} className="blog-card">
        <BlogCard
          title="GCP Professional DevOps Engineer"
          site="Google Cloud"
          link="#"
        />
      </Col>

      <Col md={4} className="blog-card">
        <BlogCard
          title="GCP Professional Cloud Security Engineer"
          site="Google Cloud"
          link="#"
        />
      </Col>

      <Col md={4} className="blog-card">
        <BlogCard
          title="GCP Associate Cloud Engineer"
          site="Google Cloud"
          link="#"
        />
      </Col>

      <Col md={4} className="blog-card">
        <BlogCard
          title="AWS Certified Data Engineer – Associate"
          site="Amazon Web Services"
          link="#"
        />
      </Col>

    </Row>
  </Container>
</Container>
  );
}

export default Projects;

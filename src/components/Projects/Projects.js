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
          link="https://www.credly.com/badges/1e5bfa5d-be1f-45ac-b7e5-bdff027e904d/public_url"
        />
      </Col>

      <Col md={4} className="blog-card">
        <BlogCard
          title="GCP Professional DevOps Engineer"
          site="Google Cloud"
          link="https://www.credly.com/badges/f4e47cc2-2695-4254-a60d-4598d6929fc6/public_url"
        />
      </Col>

      <Col md={4} className="blog-card">
        <BlogCard
          title="GCP Professional Cloud Security Engineer"
          site="Google Cloud"
          link="https://www.credly.com/badges/1627eccd-bf53-4ddb-a053-5e09b1e1ef94/public_url"
        />
      </Col>

      <Col md={4} className="blog-card">
        <BlogCard
          title="Associate Cloud Engineer Certification"
          site="Google Cloud"
          link="https://www.credly.com/badges/aa931694-71f1-485c-af5b-24afeb37ec91/public_url"
        />
      </Col>

      <Col md={4} className="blog-card">
        <BlogCard
          title="AWS Certified Data Engineer – Associate"
          site="Amazon Web Services"
          link="https://www.credly.com/badges/42d5c4d6-8b7d-44c0-901e-ef7ef97701f3/public_url"
        />
      </Col>

      <Col md={4} className="blog-card">
        <BlogCard
          title="Professional Data Engineer Certification"
          site="Google Cloud"
          link="https://www.credly.com/badges/d65c2a56-d34f-4c64-b0e1-f6cdf1e100d0/public_url"
        />
      </Col>

    </Row>
  </Container>
</Container>
  );
}

export default Projects;

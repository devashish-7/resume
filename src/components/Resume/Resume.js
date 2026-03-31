import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/DEVASHISH JANGID1.pdf";
import { FaAws, FaDocker, FaJenkins, FaLinux, FaPython } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiAnsible, SiGooglecloud } from "react-icons/si";


function Resume() {
  
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume
          </Button>
        </Row>
        <Row className="resume modern-resume">
  <Col md={6}>
    <h3 className="section-title">💼 Experience</h3>

    <div className="timeline">

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <h4>AWS DevOps Engineer – Virtusa</h4>
        <span>Sep 2024 - Present</span>
        <p>Client: JPMorgan Chase</p>
        <ul>
          <li>Kubernetes infrastructure management</li>
          <li>CI/CD pipelines using Jenkins</li>
          <li>Bitbucket for version control</li>
        </ul>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <h4>AWS DevOps Engineer – Virtusa</h4>
        <span>Feb 2024 - Sep 2024</span>
        <ul>
          <li>Terraform-based AWS infrastructure</li>
          <li>EC2, VPC, RDS automation</li>
        </ul>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <h4>AWS Cloud Engineer – Virtusa</h4>
        <span>Mar 2023 - Jan 2024</span>
        <ul>
          <li>AWS WorkSpaces automation</li>
          <li>SAML authentication setup</li>
        </ul>
      </div>

    </div>

    <h3 className="section-title">🏆 Certifications</h3>
    <ul className="cert-list">
      <li>GCP Professional Cloud Architect</li>
      <li>GCP DevOps Engineer</li>
      <li>AWS Data Engineer Associate</li>
    </ul>
  </Col>

  <Col md={6}>
    <h3 className="section-title">🛠 Skills</h3>

    <div className="skills-grid">
      <div className="skill"><FaAws /> AWS</div>
      <div className="skill"><SiGooglecloud /> GCP</div>
      <div className="skill"><FaDocker /> Docker</div>
      <div className="skill"><SiKubernetes /> Kubernetes</div>
      <div className="skill"><SiTerraform /> Terraform</div>
      <div className="skill"><SiAnsible /> Ansible</div>
      <div className="skill"><FaJenkins /> Jenkins</div>
      <div className="skill"><FaLinux /> Linux</div>
      <div className="skill"><FaPython /> Python</div>
    </div>

    <h3 className="section-title">🎓 Education</h3>
    <div className="education-card">
      <h4>B.Tech CSE</h4>
      <p>Lovely Professional University</p>
      <span>CGPA: 8.0</span>
    </div>

    <div className="education-card">
      <h4>12th Board</h4>
      <p>RBSE</p>
      <span>93.20%</span>
    </div>

  </Col>
</Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;

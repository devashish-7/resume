import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/DEVASHISH JANGID1.pdf";

function Resume() {
  
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Web Development Project [LPU]"
              date="Jan 2020 - Feb 2020"
              content={[
                "Complete 15 days workshop based on Web Development using HTML, CSS, JAVASCRIPT, PHP, MYSQL",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [Btvertos Organisation LPU]"
              content={[
                "Worked on creating the frontend-end and Back-end of the website using Bootstrap, Javascript, Php, MySql.",
              ]}
            />
            <Resumecontent
              title="Web Developer [i2i Organisation LPU]"
              content={[
                "Operated on developing the frontend end of the website using Bootstrap, Javascript",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="LOVELY PROFESSIONAL UNIVERSITY [Phagwara, Punjab] "
              date="2022"
              content={[`CGPA: 8.01`]}
            />
            <Resumecontent
              title="12TH BOARD [Veer Teja School,Rajasthan]"
              date="2016 - 2017"
              content={["Precentage: 93.20%"]}
            />
            <Resumecontent
              title="10TH BOARD [Jay Sankar School,Rajasthan] "
              date="2013 - 2014"
              content={["Precentage: 69.50%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Securing 59th rank in CodeWars. ",
                "Certified by Simplilearn in React.js",
                "Certified by RSKS in Community development Project ",
                "Certified by NYK Organization in clean India mission.",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;

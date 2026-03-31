import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with technology and automation, and I’ve been continuously learning and building in the DevOps space 🤷‍♂️
              <br />
              <br />
              I am skilled in tools and technologies like Git, GitHub, Bitbucket, Jenkins, GitLab, Linux, Windows, and Shell Scripting
              <br />
              <br />
              My current focus is on &nbsp;
              <i>
                <b className="purple">
                  DevOps, Cloud, and Infrastructure Automation 
                </b>
              </i>
              <br />
              <br />
              I work with technologies like 
              Docker, Kubernetes, Terraform, Ansible, AWS, and GCP to build scalable and reliable systems.
              I also have experience with monitoring tools like Prometheus and Grafana, web servers 
              like Nginx and Apache, and databases like MySQL.
              Whenever possible, I apply my passion for automation and efficiency using Python and modern AI tools 
              like GitHub Copilot, ChatGPT, and Claude to improve workflows and productivity.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/devashish-7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/DevashishJangi4"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/devashish-jangid-638352196"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

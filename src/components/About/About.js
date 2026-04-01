import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <div className="tech-section">
  <h1 className="project-heading">
    <strong className="purple">Technical</strong> Skills
  </h1>

  {/* Programming & Scripting */}
  <h2 className="tech-category-heading">💻 Programming & Scripting</h2>
  <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
    <Techstack iconName="devicon-cplusplus-line" label="C++" />
    <Techstack iconName="devicon-python-plain-wordmark" label="Python" />
    <Techstack iconName="devicon-javascript-plain" label="JavaScript" />
    <Techstack iconName="devicon-bash-plain" label="Shell Script" />
  </Row>

  {/* Web & Frameworks */}
  <h2 className="tech-category-heading">🌐 Web & Frameworks</h2>
  <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
    <Techstack iconName="devicon-react-original-wordmark" label="React" />
    <Techstack iconName="devicon-nodejs-plain-wordmark" label="Node.js" />
    <Techstack iconName="devicon-express-original-wordmark" label="Express" />
    <Techstack iconName="devicon-bootstrap-plain-wordmark" label="Bootstrap" />
    <Techstack iconName="devicon-nginx-original" label="Nginx" />
    <Techstack iconName="devicon-apache-plain-wordmark" label="Apache" />
  </Row>

  {/* Version Control & CI/CD */}
  <h2 className="tech-category-heading">🔧 Version Control & CI/CD</h2>
  <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
    <Techstack iconName="devicon-git-plain-wordmark" label="Git" />
    <Techstack iconName="devicon-github-original-wordmark" label="GitHub" />
    <Techstack iconName="devicon-bitbucket-original-wordmark" label="Bitbucket" />
    <Techstack iconName="devicon-gitlab-plain-wordmark" label="GitLab" />
    <Techstack iconName="devicon-jenkins-plain" label="Jenkins" />
  </Row>

  {/* Cloud & Infrastructure */}
  <h2 className="tech-category-heading">☁️ Cloud & Infrastructure</h2>
  <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
    <Techstack iconName="devicon-googlecloud-plain-wordmark" label="GCP" />
    <Techstack iconName="devicon-amazonwebservices-plain-wordmark" label="AWS" />
    <Techstack iconName="devicon-terraform-plain-wordmark" label="Terraform" />
    <Techstack iconName="devicon-ansible-plain-wordmark" label="Ansible" />
  </Row>

  {/* Containerization */}
  <h2 className="tech-category-heading">🐳 Containerization</h2>
  <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
    <Techstack iconName="devicon-docker-plain-wordmark" label="Docker" />
    <Techstack iconName="devicon-kubernetes-plain-wordmark" label="Kubernetes" />
  </Row>

  {/* Databases */}
  <h2 className="tech-category-heading">🗄️ Databases</h2>
  <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
    <Techstack iconName="devicon-mongodb-plain-wordmark" label="MongoDB" />
    <Techstack iconName="devicon-mysql-plain-wordmark" label="MySQL" />
  </Row>

  {/* Monitoring */}
  <h2 className="tech-category-heading">📊 Monitoring</h2>
  <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
    <Techstack iconName="devicon-grafana-original-wordmark" label="Grafana" />
    <Techstack iconName="devicon-prometheus-original-wordmark" label="Prometheus" />
  </Row>

  {/* Operating Systems */}
  <h2 className="tech-category-heading">🖥️ Operating Systems</h2>
  <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
    <Techstack iconName="devicon-linux-plain" label="Linux" />
    <Techstack iconName="devicon-windows8-original" label="Windows" />
  </Row>

  {/* AI Tools */}
  <h2 className="tech-category-heading">🤖 AI Tools</h2>
  <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
    <Techstack iconName="devicon-github-original-wordmark" label="GitHub Copilot" />
    <Techstack iconName="devicon-amazonwebservices-plain-wordmark" label="Amazon Q" />
    <Techstack iconName="devicon-openai-plain" label="ChatGPT" />
  </Row>

  {/* Collaboration */}
  <h2 className="tech-category-heading">🤝 Collaboration</h2>
  <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Techstack iconName="devicon-jira-plain-wordmark" label="Jira" />
    <Techstack iconName="devicon-vscode-plain-wordmark" label="VS Code" />
  </Row>
</div>
      </Container>
    </Container>
  );
}

export default About;

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./resume.css";
import pdf from "../../Assets/DEVASHISH JANGID1.pdf";
import {
  FaAws, FaDocker, FaJenkins, FaLinux, FaPython,
  FaBitbucket, FaGithub, FaGitAlt
} from "react-icons/fa";
import {
  SiGooglecloud, SiKubernetes, SiTerraform, SiAnsible,
  SiNginx, SiMysql, SiMongodb, SiGrafana, SiPrometheus,
  SiGitlab, SiJira, SiOpenai
} from "react-icons/si";


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
  <div className="resume-wrapper">

      {/* ── TOP: Experience full width ── */}
      <h3 className="section-title">💼 Work Experience</h3>
      <div className="timeline">

        {/* Job 1 */}
        <div className="timeline-item">
          <div className="timeline-dot pulse"></div>
          <div className="timeline-card">
            <div className="timeline-header">
              <div>
                <h4>AWS DevOps Engineer</h4>
                <span className="company-tag">🏢 Virtusa · Hyderabad</span>
                <span className="client-tag">👤 Client: JPMorgan Chase & Co.</span>
                <span className="project-tag">📁 Rewards Infrastructure Support and Optimization</span>
              </div>
              <span className="date-badge active">Sep 2024 – Present</span>
            </div>
            <p className="timeline-desc">
              Supporting and maintaining a Rewards Infrastructure for seamless operation of customer
              loyalty platforms. Focused on automating workflows, enhancing CI/CD pipelines, and
              ensuring reliable deployment on Kubernetes.
            </p>
            <ul className="timeline-points">
              <li>Managed and optimized Kubernetes-based infrastructure for high availability</li>
              <li>Implemented and maintained CI/CD pipelines using Jenkins for automated deployments</li>
              <li>Oversaw version control and code collaboration using Bitbucket</li>
              <li>Monitored and scheduled tasks using Control-M for workflow automation</li>
              <li>Ensured high availability and performance of the Rewards platform</li>
            </ul>
            <div className="tag-row">
              <span className="tag">Kubernetes</span>
              <span className="tag">Jenkins</span>
              <span className="tag">Bitbucket</span>
              <span className="tag">Control-M</span>
              <span className="tag">CI/CD</span>
            </div>
          </div>
        </div>

        {/* Job 2 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-card">
            <div className="timeline-header">
              <div>
                <h4>AWS DevOps Engineer</h4>
                <span className="company-tag">🏢 Virtusa · Hyderabad</span>
                <span className="client-tag">👤 Client: JPMorgan Chase & Co.</span>
                <span className="project-tag">📁 Scalable and Secure AWS Infrastructure Automation</span>
              </div>
              <span className="date-badge">Feb 2024 – Sep 2024</span>
            </div>
            <p className="timeline-desc">
              Developed a comprehensive AWS infrastructure automation solution using Terraform and Jenkins.
              Focused on modular, secure infrastructure replicable across AWS regions while adhering to compliance standards.
            </p>
            <ul className="timeline-points">
              <li>Deployed multi-tier infrastructure on AWS using Terraform including VPC, subnets, S3, RDS, EBS, Security Groups, Secrets Manager, EC2, and ALB</li>
              <li>Automated provisioning of EC2 instances and cloud resources using Terraform modules</li>
              <li>Reduced provisioning time significantly through infrastructure-as-code practices</li>
            </ul>
            <div className="tag-row">
              <span className="tag">Terraform</span>
              <span className="tag">EC2</span>
              <span className="tag">VPC</span>
              <span className="tag">RDS</span>
              <span className="tag">S3</span>
              <span className="tag">Jenkins</span>
              <span className="tag">GitHub</span>
            </div>
          </div>
        </div>

        {/* Job 3 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-card">
            <div className="timeline-header">
              <div>
                <h4>AWS Infra Cloud Engineer</h4>
                <span className="company-tag">🏢 Virtusa · Hyderabad</span>
                <span className="client-tag">👤 Client: JPMorgan Chase & Co.</span>
                <span className="project-tag">📁 AWS WorkSpaces Automation for Remote Work</span>
              </div>
              <span className="date-badge">Mar 2023 – Jan 2024</span>
            </div>
            <p className="timeline-desc">
              Built an automated system using AWS WorkSpaces to help employees access their desktops
              and apps securely from anywhere, enabling efficient and secure remote work.
            </p>
            <ul className="timeline-points">
              <li>Set up AWS environment with VPC, security groups, routing tables, and subnets</li>
              <li>Configured workspace directories with SAML authentication for seamless user access</li>
              <li>Automated creation and deployment of WorkSpaces for quick and scalable assignments</li>
              <li>Trained and supported CXL users on remote desktop access and management</li>
            </ul>
            <div className="tag-row">
              <span className="tag">AWS WorkSpaces</span>
              <span className="tag">SAML</span>
              <span className="tag">VPC</span>
              <span className="tag">Transit Gateway</span>
              <span className="tag">Security Groups</span>
            </div>
          </div>
        </div>

        {/* Job 4 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-card">
            <div className="timeline-header">
              <div>
                <h4>AWS DevOps Engineer</h4>
                <span className="company-tag">🏢 Virtusa · Hyderabad</span>
                <span className="client-tag">👤 Client: Virtusa Internal</span>
                <span className="project-tag">📁 Infrastructure Automation with Terraform Studio</span>
              </div>
              <span className="date-badge">Dec 2022 – Feb 2023</span>
            </div>
            <p className="timeline-desc">
              Created and automated cloud infrastructure using Terraform Studio, a no-code platform
              with drag-and-drop setup and AI-based code generation. Demonstrated capabilities to clients
              and managed secure container deployments.
            </p>
            <ul className="timeline-points">
              <li>Designed cloud infrastructure using Terraform Studio's drag-and-drop and AI features</li>
              <li>Provided client demos explaining the platform's automation capabilities</li>
              <li>Published blueprints to GitLab and set up approval workflows for code merging</li>
              <li>Automated code updates in GitLab using Jenkins scripts and webhooks</li>
              <li>Built Dockerfiles, resolved vulnerabilities, and pushed images to AWS ECR</li>
              <li>Applied static code analysis to identify and fix code quality issues</li>
            </ul>
            <div className="tag-row">
              <span className="tag">Terraform Studio</span>
              <span className="tag">Jenkins</span>
              <span className="tag">Docker</span>
              <span className="tag">GitLab</span>
              <span className="tag">AWS ECR</span>
            </div>
          </div>
        </div>

        {/* Job 5 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-card">
            <div className="timeline-header">
              <div>
                <h4>Associate Cloud Engineer</h4>
                <span className="company-tag">🏢 Virtusa · Hyderabad</span>
                <span className="client-tag">👤 Client: Virtusa Internal</span>
                <span className="project-tag">📁 Employee Certification Portal</span>
              </div>
              <span className="date-badge">Jan 2022 – Nov 2022</span>
            </div>
            <p className="timeline-desc">
              Developed an Employee Certification Portal for efficient management of employee data
              through CRUD operations, hosted on Google Cloud Platform.
            </p>
            <ul className="timeline-points">
              <li>Implemented CRUD operations (GET, POST, PUT, DELETE) for employee data management</li>
              <li>Tested REST APIs using Postman to ensure functionality and reliability</li>
              <li>Connected application to Cloud SQL in GCP for secure and efficient data storage</li>
              <li>Deployed the web service on Google App Engine leveraging PaaS for easy scalability</li>
            </ul>
            <div className="tag-row">
              <span className="tag">GCP</span>
              <span className="tag">Python</span>
              <span className="tag">Flask</span>
              <span className="tag">Cloud SQL</span>
              <span className="tag">App Engine</span>
              <span className="tag">Postman</span>
            </div>
          </div>
        </div>

      </div>

      {/* ── BOTTOM: Two columns ── */}
      <Row className="mt-4">

        {/* LEFT: Skills + Certifications */}
        <Col md={6}>
          <h3 className="section-title">🛠 Core Skills</h3>
          <div className="skills-grid">
            <div className="skill-pill"><FaAws className="skill-icon aws" /> AWS</div>
            <div className="skill-pill"><SiGooglecloud className="skill-icon gcp" /> GCP</div>
            <div className="skill-pill"><FaDocker className="skill-icon docker" /> Docker</div>
            <div className="skill-pill"><SiKubernetes className="skill-icon k8s" /> Kubernetes</div>
            <div className="skill-pill"><SiTerraform className="skill-icon tf" /> Terraform</div>
            <div className="skill-pill"><SiAnsible className="skill-icon ansible" /> Ansible</div>
            <div className="skill-pill"><FaJenkins className="skill-icon jenkins" /> Jenkins</div>
            <div className="skill-pill"><FaLinux className="skill-icon linux" /> Linux</div>
            <div className="skill-pill"><FaPython className="skill-icon python" /> Python</div>
            <div className="skill-pill"><SiGrafana className="skill-icon grafana" /> Grafana</div>
            <div className="skill-pill"><SiPrometheus className="skill-icon prom" /> Prometheus</div>
            <div className="skill-pill"><SiNginx className="skill-icon nginx" /> Nginx</div>
            <div className="skill-pill"><FaGithub className="skill-icon" /> GitHub</div>
            <div className="skill-pill"><SiGitlab className="skill-icon gitlab" /> GitLab</div>
            <div className="skill-pill"><FaBitbucket className="skill-icon bitbucket" /> Bitbucket</div>
            <div className="skill-pill"><SiJira className="skill-icon jira" /> Jira</div>
            <div className="skill-pill"><SiMysql className="skill-icon mysql" /> MySQL</div>
            <div className="skill-pill"><SiMongodb className="skill-icon mongo" /> MongoDB</div>
          </div>

          <h3 className="section-title mt-4">🏆 Certifications</h3>
          <div className="cert-list-wrapper">
          <div className="cert-list">

  <div className="cert-card">
    <span className="cert-icon">☁️</span>
    <div>
      <strong>GCP Associate Cloud Engineer</strong>
      <p>Google Cloud Platform</p>
    </div>
  </div>

  <div className="cert-card">
    <span className="cert-icon">🏗️</span>
    <div>
      <strong>GCP Professional Cloud Architect</strong>
      <p>Google Cloud Platform</p>
    </div>
  </div>

  <div className="cert-card">
    <span className="cert-icon">📊</span>
    <div>
      <strong>GCP Professional Data Engineer</strong>
      <p>Google Cloud Platform</p>
    </div>
  </div>

  <div className="cert-card">
    <span className="cert-icon">⚙️</span>
    <div>
      <strong>GCP Professional DevOps Engineer</strong>
      <p>Google Cloud Platform</p>
    </div>
  </div>

  <div className="cert-card">
    <span className="cert-icon">🔐</span>
    <div>
      <strong>GCP Professional Cloud Security Engineer</strong>
      <p>Google Cloud Platform</p>
    </div>
  </div>

  <div className="cert-card">
    <span className="cert-icon">🔶</span>
    <div>
      <strong>AWS Certified Data Engineer – Associate</strong>
      <p>Amazon Web Services</p>
    </div>
  </div>

</div>
</div>
        </Col>

        {/* RIGHT: Education */}
        <Col md={6}>
          <h3 className="section-title">🎓 Education</h3>

          <div className="edu-card">
            <div className="edu-icon">🎓</div>
            <div className="edu-body">
              <h4>Bachelor of Technology — CSE</h4>
              <p className="edu-institute">Lovely Professional University</p>
              <div className="edu-meta">
                <span className="edu-badge">CGPA: 8.0 / 10</span>
                <span className="edu-year">2019 – 2023</span>
              </div>
            </div>
          </div>

          <div className="edu-card">
            <div className="edu-icon">📘</div>
            <div className="edu-body">
              <h4>12th Board — Science</h4>
              <p className="edu-institute">RBSE</p>
              <div className="edu-meta">
                <span className="edu-badge">93.20%</span>
                <span className="edu-year">2018 – 2019</span>
              </div>
            </div>
          </div>

          {/* Soft skills / extras */}
          <h3 className="section-title mt-4">⚡ Highlights</h3>
          <div className="highlights-grid">
            <div className="highlight-box">🚀 CI/CD Automation</div>
            <div className="highlight-box">☁️ Multi-Cloud</div>
            <div className="highlight-box">🐳 Containerization</div>
            <div className="highlight-box">📦 IaC Expert</div>
            <div className="highlight-box">🔐 IAM & Security</div>
            <div className="highlight-box">🤖 AI Tools</div>
            <div className="highlight-box">📊 Monitoring</div>
          </div>
        </Col>

      </Row>
    </div>
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

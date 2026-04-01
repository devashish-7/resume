import React from "react";
import { Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Techstack({ iconName, label }) {
  return (
    <Col xs={4} md={2} className="tech-icons">
      <i className={iconName}></i>
      {label && <p className="tech-label">{label}</p>}
    </Col>
  );
}

export default Techstack;

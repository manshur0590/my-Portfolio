import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculator from "../../Assets/Projects/calculator.png";
import healthline from "../../Assets/Projects/healthline.png";
import childSafety from "../../Assets/Projects/child safety app.png";

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
              imgPath={healthline}
              isBlog={false}
              title="HealthLine"
              description="A mobile app for secure online doctor consultations, patient doctor communication, and home nurse services. Built with Java and XML, it supports Admin, Patient, and Doctor roles. Integrated with Firebase Authentication and stores user data, appointments, and medical history in Cloud Firestore."
              ghLink="https://github.com/manshur0590/healthline-android-app "
              //demoLink="https://healthline-android-app.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={childSafety}
              isBlog={false}
              title="Child Safety App"
              description="This project presents a mobile app that uses kin recognition technology to ensure child safety. By verifying trusted guardians through facial recognition, tracking location, and sending emergency alerts, the app helps parents monitor their child in real time and stay informed if any risk arises."
              ghLink="https://github.com/manshur0590/child-safety-flutter-app"
              //demoLink="https://child-safety-flutter-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Scientific Calculator App"
              description="Developed an Android scientific calculator with a clean UI supporting trigonometric, logarithmic, and
exponential functions using Java and XML."
              ghLink="https://github.com/manshur0590/Calculator"
              //demoLink="https://Calculator/"              
            />
          </Col>

          </Row>
      </Container>
    </Container>
  );
}

export default Projects;

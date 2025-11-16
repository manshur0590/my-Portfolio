import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAndroidstudio,
  SiVisualstudiocode,
  SiGit,
  SiGithub,
  SiMysql,
  SiFigma,
  SiTableau,
  SiMicrosoft, // used instead of SiMicrosoftpowerbi
} from "react-icons/si";
import { FaRobot } from "react-icons/fa"; // GPT / Gemini

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Android Studio">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Figma">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Tableau">
        <SiTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Power BI">
        <SiMicrosoft /> {/* represents Power BI */}
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AI Tools (GPT / Gemini)">
        <FaRobot />
      </Col>
    </Row>
  );
}

export default Toolstack;

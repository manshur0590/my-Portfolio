import React from "react";
import { Col, Row } from "react-bootstrap";

// Dev / Language icons
import { DiJava, DiJavascript1, DiPython, DiReact } from "react-icons/di";
import {
  SiKotlin,
  SiDart,
  SiDotnet,
  SiMysql,
  SiPostgresql,
  SiFlutter,
  SiFirebase,
  SiSqlite,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { VscFileCode } from "react-icons/vsc"; // XML icon

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Java">
        <DiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Kotlin">
        <SiKotlin />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="XML">
        <VscFileCode />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <SiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
        <SiPostgresql />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="SQLite">
        <SiSqlite />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Dart">
        <SiDart />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title=".NET">
        <SiDotnet />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Flutter">
        <SiFlutter />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="React Native">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="HTML">
        <SiHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="CSS">
        <SiCss3 />
      </Col>
    </Row>
  );
}

export default Techstack;

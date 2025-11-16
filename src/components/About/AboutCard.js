import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Manshur Ali </span>from
             <span className="purple"> Gopalganj, India.</span>
            <br />
            A Computer Engineering student with a strong foundation in Android development and cloud technologies,
seeking an Android development role to apply problem-solving skills and contribute to impactful projects.
            <br />
            Currently i am Final year student at <a href="https://www.marwadiuniversity.ac.in" target="_blank">Marwadi University</a>
           
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
           
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Manshur</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

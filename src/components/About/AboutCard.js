import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">GADHA VENU</span>
            from <span className="purple"> Kerala, India.</span>
            <br />
            I am a Full Stack Developer Proficient in Node.js, Express.js,
            MongoDB, React, Redux, and C/C++
            <br />
            I have completed Bachelor’s degree in Computer Science from Sree
            Buddha College of Engineering
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Gadha Venu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

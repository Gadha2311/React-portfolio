import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Spotify from "../../Assets/Projects/Screenshot 2024-12-10 143351.png";
import Netflix from "../../Assets/Projects/netflix.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import olx from "../../Assets/Projects/Screenshot 2024-12-10 143635.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Civic"
              description="Built a full-stack social media platform with TypeScript,React,Node.js/Express.js,MongoDB and Cloudinary. Integrated real-time chat with Socket.io and video calling using ZEGOCLOUD."
              ghLink="https://github.com/Gadha2311/civic_client.git"
              demoLink="https://www.thecivic.lol/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Ecommerce website"
              description="Developed a web app with Node.js, Express.js, and MongoDB. Frontend built with EJS and styled-components. Integrated product browsing, shopping cart, favorites, and Razorpay for payments. Engineered backend for user authentication, order processing, and inventory management. Created an admin panel for managing users, products, and more."
              ghLink="https://github.com/Gadha2311/coffee-blend-node-project-.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={olx}
              isBlog={false}
              title="Olx clone"
              description="Built an OLX clone with React and Redux for the frontend. Implemented user authentication and developed backend services with Node.js and Express.js. Used MongoDB for data storage and management."
              ghLink="https://github.com/Gadha2311/olx-REACT.git"
              demoLink="https://olx-react-rho.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Spotify}
              isBlog={false}
              title="Spotify Clone"
              description="Created a Spotify Premium clone using HTML, CSS, and Bootstrap, showcasing frontend development and design skills by replicating key features of the platform."
              ghLink="https://github.com/Gadha2311/spotify-premium.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ToDo App"
              description="Built a ToDo app using the MERN stack, allowing users to create and delete tasks with an intuitive interface for task management."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix Clone"
              description="Developed a Netflix clone using React replicating core features to showcase frontend development and design skills."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

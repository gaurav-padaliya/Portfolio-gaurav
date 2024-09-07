import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import inshots from "../../Assets/Projects/inshots.png";
import login from "../../Assets/Projects/login.png";
import institute from "../../Assets/Projects/institute.png";
import verterinary from "../../Assets/Projects/verterinary.png";

import chatbot from "../../Assets/Projects/chatbot.png";
import dugout from "../../Assets/Projects/dugout.png";

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
              imgPath={verterinary}
              isBlog={false}
              title="Verterinary Website"
              description="The website shown is Vetvibe Healthcare's , built with Next.js , chakra UI and SCSS. It showcases veterinary products with a clean, modern design. Features include a product list and contact form, ensuring a user-friendly experience on all devices"
              ghLink="https://github.com/gaurav-padaliya/verterinary-product"
              demoLink="https://vetvibehealthcare.live/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dugout}
              isBlog={false}
              title="Fantasy cricket App"
              description="A streamlined backend of fantasy cricket web application developed with Node.js, PostgreSQL, MongoDB, and Entity Sports APIs. Users can build teams, join contests, and track live scores and leaderboards. Designed for performance and scalability, the app focuses on core functionalities to enhance user engagement in fantasy sports"
              ghLink="https://github.com/gaurav-padaliya/Dugout-Backend"
              demoLink="https://play.google.com/store/apps/details?id=com.dugoutlive.app&hl=en_IN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inshots}
              isBlog={false}
              title="News feeds App - Inshorts"
              description="A clone of the Inshorts news app, built with React.js, Bootstrap, and CSS. The app features a clean, modern design with a responsive layout. It includes a news feed, search functionality, and a detailed news page. The app is optimized for performance and SEO, ensuring a seamless user experience."
              ghLink="https://github.com/gaurav-padaliya/Inshots-clone"
              demoLink="http://gaurav-padaliya.github.io/Inshots-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Contextual ChatBot"
              description="Designed and built the for a Contextual chatbot and web app similar to Groww using google dialogflow API.The chatbot help Groww users navigate the website, by providing relevant FAQsand trained chatbot according to FAQs and order details to fetch the data"
              ghLink="https://github.com/gaurav-padaliya/chatbot_groww"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={login}
              isBlog={false}
              title="Login Auth"
              description="This login and signup module features multiple authentication options, crafted using React.js and styled with CSS and HTML. It integrates seamlessly with Firebase Auth, supporting various authentication methods for enhanced security and user flexibility. The design is adaptable, allowing for easy integration with other projects and multiple authentication systems."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={institute}
              isBlog={false}
              title="Institute Website"
              description="A website for an institute built with React.js, Bootstrap, and SCSS. The website features a clean, modern design with a responsive layout. It includes a course list, contact form, and a blog section. The website is optimized for performance and SEO, ensuring a seamless user experience."
              ghLink="https://github.com/gaurav-padaliya/institute.github.io"
              demoLink="https://gaurav-padaliya.github.io/institute.github.io/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

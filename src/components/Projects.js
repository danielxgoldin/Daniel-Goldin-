import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "TacoApp",
      description:
        "TacoApp is an application that uses Google maps API to show you all the tacos closest to your location anywhere in the world. Currently, the Google maps API is down when you visit the page as Google charges per click or search and we are not currently paying for it as we were when we created it.",
      imgUrl: projImg1,
      
      
    },
    {
      title: "ATXPokerClub",
      description:
        "This was a website I created for a client. Mostly built with HTML, JAVASCRIPT, and CSS.",
      imgUrl: projImg2,
    },
    {
      title: "Team Profile Generator",
      description: "This is an application I built that will generate teams for companies!",
      imgUrl: projImg3,
    },
    {
      title: "Weather Finder",
      description: "This is a simple weather finder I created. It uses weather API to show the user a weather forcast after they input their location.",
      imgUrl: projImg4,

    },
    {
      title: "ATXPokerClub",
      description: "This was a website I created for a client. Mostly built with HTML, JAVASCRIPT, and CSS.",
      imgUrl: projImg2,
    },
    {
      title: "Team Profile Generator",
      description: "This is an application I built that will generate teams for companies!",
      imgUrl: projImg3,
      
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Please, click the pictures below to view!</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Certification</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Referencess</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div>
                          <p>Click Below!</p>{" "}
                          <a
                            href="https://www.linkedin.com/in/daniel-g-044b21238/overlay/1635508011101/single-media-viewer/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=nHMypkMTU1HUUW85Zt0Ff7MDbq17n0eVeXaoM9Knt4Q="
                              alt="example"
                            />
                          </a>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p></p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

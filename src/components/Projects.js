import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img4.jpg";
import projImg2 from "../assets/img/project-img5.jpg";
import projImg3 from "../assets/img/project-img6.jpg";
import projImg4 from "../assets/img/project-img7.jpg";
import projImg5 from "../assets/img/project-img8.jpg";
// import projImg6 from "../assets/img/project-img8.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Projects = () => {

  const projects = [
    {
      title: "Movie Recomendation System (Link)",
      description: "Full stack Project",
      imgUrl: projImg1,
      siteUrl: "http://krishipatel.pythonanywhere.com/",
    },
    {
      title: "Visual Microphone (Link)",
      description: "Video Processing",
      imgUrl: projImg2,
      siteUrl: "https://github.com/KrishiPate/VISUAL-MICROPHONE",
    },
    {
      title: "Sorting Visualizer (Link)",
      description: "Web Development",
      imgUrl: projImg3,
      siteUrl: "https://krishipate.github.io/Sorting_visualizer/",
    },
    {
      title: "License Plate detection (Link)",
      description: "Image Processing",
      imgUrl: projImg4,
      siteUrl: "https://github.com/KrishiPate/License-plate-detection-in-image",
    },
    {
      title: "Denoising and Deblurring (Link)",
      description: "Signal Processing",
      imgUrl: projImg5,
      siteUrl: "https://github.com/KrishiPate/Temperature-Sensor-Correction",
    },

  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>All of my projects are listed below along with their Github repository links. Do check it out!!.
                    Also dont forget to check out my Github. Link down below.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        
                          {/* <Nav.Link eventKey="first">
                                  <a className="gitlink" style={{color: 'white',textDecoration:'none'}} href="https://github.com/KrishiPate">
                                      My Github
                                  </a>
                              
                          </Nav.Link> */}
                          <Nav.Link eventKey="first"  href="https://github.com/KrishiPate" className="text-white">
                                  {/* <a className="gitlink" style={{color: 'white',textDecoration:'none'}}> */}
                                      My Github
                                  {/* </a> */}
                              
                          </Nav.Link>
                    </Nav.Item>
                    
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

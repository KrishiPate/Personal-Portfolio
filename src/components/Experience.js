import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import tigerAnalytics from "../assets/img/tiger analytics.png"
import BS from "../assets/img/bell-system-24.jpeg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import projImg1 from "../assets/img/project-img4.jpg";

export const Experience = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="exp" id="experience">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="exp-bx wow zoomIn">
                        <h2>Experience</h2>
                        {/* <p>Below mentioned are my skills.<br></br>Like to spend more time on DSA, Mathematical and Locical problem solving comparatively.</p> */}
                        <Carousel responsive={responsive} infinite={false} className="owl-carousel owl-theme exp-slider">
                            <div className="item">
                                <img src={tigerAnalytics} alt="Image" />
                                <div className="exp-discription">
                                    <table className="exp-num">
                                        <tr>
                                            <th>Company</th>
                                            <td>Tiger Analytics</td>
                                        </tr>
                                        <tr>
                                            <th>Role</th>
                                            <td>Trainee Analyst</td>
                                        </tr>
                                        <tr>
                                            <th>Location</th>
                                            <td>Chennai</td>
                                        </tr>
                                        <tr>
                                            <th>Tenure</th>
                                            <td>2024 to Present</td>
                                        </tr>
                                        <tr>
                                            <th>Tech-stack</th>
                                            <td>Python, sklearn, keras, AWS, Asure</td>
                                        </tr>
                                    </table>
                                </div>
                                
                            </div>
                            <div className="item">
                                <img src={BS} alt="Image" />
                                <div className="exp-discription">
                                <table className="exp-num">
                                        <tr>
                                            <th>Company</th>
                                            <td>Bell System 24</td>
                                        </tr>
                                        <tr>
                                            <th>Role</th>
                                            <td>SWE intern</td>
                                        </tr>
                                        <tr>
                                            <th>Location</th>
                                            <td>Tokyo(Japan)</td>
                                        </tr>
                                        <tr>
                                            <th>Tenure</th>
                                            <td>June 2023 to Aug 2023</td>
                                        </tr>
                                        <tr>
                                            <th>Tech-stack</th>
                                            <td>ReactJS, ReactFlow, BellCloud+ AWS, SOAP API.</td>
                                        </tr>
                                    </table>
                                </div>
                                
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
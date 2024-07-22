import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                            <div className="skill-content">
                                <div className="ml-dl">
                                    <h3>Development</h3>
                                    <hr></hr>
                                    <ul>
                                        <li>ReactJS</li>
                                        <li>NodeJS</li>
                                        <li>Flask</li>
                                        <li>Django</li>
                                    </ul>
                                </div>
                                <div className="ml-dl">
                                    <h3>ML/DL</h3>
                                    <hr></hr>
                                    <ul>
                                        <li>Sklearn</li>
                                        <li>Keras</li>
                                        <li>NLP</li>
                                        <li>Computer Vision</li>
                                    </ul>
                                </div>
                                <div className="ml-dl">
                                    <h3>OPS</h3>
                                    <hr></hr>
                                    <ul>
                                        <li>MLOps</li>
                                        <li>ZenML</li>
                                        <li>AWS</li>
                                        <li>ASURE</li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
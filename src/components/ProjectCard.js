import { Col } from "react-bootstrap";
// import {Link} from "react-router-dom";
export const ProjectCard = ({ title, description, imgUrl, siteUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <div>
          
        </div>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <a style={{color: 'white',textDecoration:'none'}} href={siteUrl} target="_blank" rel="noopener noreferrer">
          <h4>{title}</h4>
          </a>
          
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
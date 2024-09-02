import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './Review.css';
const ProjectCard = ({review}) => {
   
    const {title, description, companyLogo} = review;
   
    return (
        <Card className="project-card-view">
      <Card.Img variant="top" style={{height: '300px'}} src={companyLogo} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        {/* <Button variant="primary" href={ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {isBlog ? "Blog" : "GitHub"}
        </Button> */}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {/* {!isBlog && demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )} */}
      </Card.Body>
    </Card>
    );
};

export default ProjectCard;
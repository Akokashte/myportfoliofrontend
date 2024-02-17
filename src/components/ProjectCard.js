import React from "react";
import "../styles/project_card.css";
import htmlImage from "../static/images/html.jpeg"

const ProjectCard = () => {
    return (
        <>
            <div className="project_card">
                <div className="project_img">
                    <img src={htmlImage} alt="project_img" />
                    <div className="main_category">Frontend</div>
                </div>
                <div className="project_content">
                    <div className="project_name ubuntu-medium">REMS full stack MERN website</div>
                    <div className="desc">project in MERN is my full stack project in MERN project and it is very important project which is must to</div>
                    <div className="btn_primary">
                        view project
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProjectCard;
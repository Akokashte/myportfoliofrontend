import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/projects.css";

const Projects = () => {
    return (
        <>
            <section className="projects_wrapper">
                <div className="projects_inner_wrapper">
                    <div className="heading">
                        <h2>my projects</h2>
                    </div>
                    <div className="project_card_collection">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Projects;
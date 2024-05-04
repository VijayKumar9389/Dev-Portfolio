import './Project.scss';
import {projectsData} from "./Data.ts";

const Project = () => {
    return (
            <div className="project-wrapper">
                {projectsData.map((project, index: number) => (
                    <div className="project-card" key={index}>
                        <div className="project" style={{backgroundImage: `url(${project.image})`}}
                             onClick={() => window.open(project.link, "_blank")}>
                            <p className="project-description">{project.description}</p>
                        </div>
                        <h3>{project.title}</h3>
                    </div>
                ))}
            </div>
    );
};

export default Project;

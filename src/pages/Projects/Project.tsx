import './Project.scss';
import {projectsData} from "./Project.data.ts";
import Header from "../../components/Header/Header.tsx";

const Project = () => {
    return (
        <div className="project-container">
            <Header heading="Resources & Contact" desc=""/>
            <div className="project-wrapper">
                {projectsData.map((project, index: number) => (
                    <div className="project-card" key={index}>
                        <div className="project" style={{backgroundImage: `url(${project.image})`}}
                             onClick={() => window.open(project.link, "_blank")}>
                            <p className="project-description">{project.description}</p>
                        </div>
                        <h3 className="project-title">{project.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;

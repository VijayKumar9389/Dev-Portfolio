import './Work.scss';
import React, {useEffect, useState} from "react";
import {WorkData, WorkSectionData, workData} from "./Data.ts";

const ProjectSection: React.FC<{ project: WorkData }> = ({ project }) => {
    const [selectedSection, setSelectedSection] = useState<number>(0);

    const handleMouseEnter = (index: number): void => {
        setSelectedSection(index);
    };

    useEffect((): void => {
        // Add any side effects related to selectedSection here
    }, [selectedSection]);

    return (
        <div className="work-section">
            <div className="work-wrapper">
                <img
                    src={project.sections?.[selectedSection]?.imageUrl}
                    alt={project.title}
                    className="work-image"
                    data-aos="fade-right"
                />
                <div className="work-content" data-aos="fade-left">
                    <h2 className="work-title">{project.title}</h2>
                    {project.sections.map((section: WorkSectionData, sectionIndex: number) => {
                        return (
                            <div
                                key={sectionIndex}
                                onMouseEnter={() => handleMouseEnter(sectionIndex)}
                                className={`work-description ${selectedSection === sectionIndex ? 'selected' : ''}`}
                            >
                                <p>{section.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};


const Work = () => {
    return (
        <div className="work-container">
            <div className="heading-wrapper">
            </div>
            {workData.map((project: WorkData, index: number) => (
                <ProjectSection key={index} project={project} />
            ))}
        </div>
    );
};

export default Work;


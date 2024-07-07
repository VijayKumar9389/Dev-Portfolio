import './Work.scss';
import React, {useEffect, useState} from "react";
import {WorkData, WorkSectionData, workData} from "./Data.ts";
import ImageStorage from "../../assets/images/Devices.png";
import Header from "../../components/Header/Header.tsx";

const ProjectSection: React.FC<{ project: WorkData }> = ({project}) => {
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
                    <h2>{project.title}</h2>
                    <p className="work-info">{project.desc}</p>
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
            <div className="work-heading">
                <Header
                    heading="Explore My Digital Solutions Powering Real-World Businesses"
                    desc=""
                />
                <img src={ImageStorage} alt="Hero Image" data-aos="fade-in" className="work-heading-image"/>
            </div>
            {workData.map((project: WorkData, index: number) => (
                <ProjectSection key={index} project={project}/>
            ))}
        </div>
    );
};

export default Work;


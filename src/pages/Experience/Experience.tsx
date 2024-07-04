import React from 'react';
import './Experience.scss';
import {experienceData, ExperienceItem} from "./Data.ts";
import Header from "../../components/Header/Header.tsx";

const ExperienceSection: React.FC<ExperienceItem & { index: number }> = ({year, title, description, index}) => {
    const aosAnimation = index % 2 === 0 ? "fade-right" : "fade-left";
    return (
        <div className="experience-item">
            <div className="timeline-dot"></div>
            <h2 className="year" data-aos={aosAnimation} data-aos-delay="000">{year}</h2>
            <div className="title" data-aos={aosAnimation} data-aos-delay="200">{title}</div>
            <div className="details" data-aos={aosAnimation} data-aos-delay="400">
                    {description}
            </div>
        </div>
    );
}

const Experience: React.FC = () => {
    const headingData = {
        heading: "A Solid Foundation for Your Business Success",
        desc: "My journey from academic training to professional project execution has equipped me with the expertise to handle complex development challenges."
    }
    return (
        <div className="experience-container">
            <Header heading={headingData.heading} desc={headingData.desc} />
            <div className="experience-wrapper">
                {experienceData.map((item: ExperienceItem, index: number) => (
                    <ExperienceSection key={index} index={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Experience;

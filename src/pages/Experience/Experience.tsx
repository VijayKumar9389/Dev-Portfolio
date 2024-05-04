import React from 'react';
import './Experience.scss';
import {experienceData, ExperienceItem} from "./Data.ts";

const ExperienceSection: React.FC<ExperienceItem & { index: number }> = ({year, title, details, index}) => {
    const isOdd: boolean = index % 2 === 1;
    return (
        <div className="experience-item">
            <div className="timeline-dot"></div>
            <div className="year">{year}</div>
            <div className="title" data-aos="fade-down" data-aos-delay="100">{title}</div>
            <div className="details">
                <ul>
                    {details.map((detail: string, index: number) => (
                        <li key={index} data-aos={isOdd ? "fade-left" : "fade-right"} data-aos-delay={`${index * 100}`}>
                            <p>{detail}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const Experience: React.FC = () => {
    return (
        <div className="experience-container">
            <div className="experience-wrapper">
                {experienceData.map((item: ExperienceItem, index: number) => (
                    <ExperienceSection key={index} index={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Experience;

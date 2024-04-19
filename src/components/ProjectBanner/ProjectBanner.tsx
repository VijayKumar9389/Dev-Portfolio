import React from 'react';
import './AboutProject.scss'; // Import CSS for styling (you can create this file)

interface AboutProjectProps {
    projectName: string;
    projectDescription: string;
    imageUrl: string;
}

const AboutProject: React.FC<AboutProjectProps> = ({ projectName, projectDescription, imageUrl }) => {
    return (
        <div className="about-project-container">
            <div className="project-info">
                <h2>{projectName}</h2>
                <p>{projectDescription}</p>
            </div>
            <div className="project-image">
                <img src={imageUrl} alt={projectName} />
            </div>
        </div>
    );
};

export default AboutProject;

import React from 'react';
import './Experience.scss';

interface ExperienceItem {
    year: string;
    title: string;
    details: string[];
}

const experienceData: ExperienceItem[] = [
    {
        year: '2015 - 2016',
        title: 'Systems Trainee Internship',
        details: [
            'Managed and prioritized tasks across multiple teams.',
            'Installed and configured Linux and Windows servers.',
            'Traveled to multiple branches for server and router installation.',
            'Coordinated with weekend staff for supply orders and new switch installations.',
        ],
    },
    {
        year: '2016 - 2018',
        title: 'Business Information Systems (Diploma)',
        details: [
            'Developed a full-stack web application using HTML, CSS, JavaScript, PHP, and MySQL.',
            'Gained expertise in Linux and Windows server administration.',
            'Studied various business and IT-related courses.',
            'Deepened understanding of data structures, algorithms, and Java programming.',
        ],
    },
    {
        year: '2018 - 2020',
        title: 'Freelance Developer',
        details: [
            'Analyzed business requirements and presented design solutions to clients.',
            'Created Java applications with user-friendly interfaces and SQLite database integration.',
            'Contributed to game development using C# in Unity.',
            "Designed a Java application to process stakeholder lists and generate organized Excel files.",
            'Designed Python applications for data processing and integration tasks.',
        ],
    },
    {
        year: '2020 - Present',
        title: 'Software Engineer',
        details: [
            'Develop high-quality full-stack web applications using React.js, Node.js, and Express.js.',
            "Developed a secure CRUD (Create, Read, Update, Delete) application using React, Node.js, Express, and MySQL, focusing on safeguarding sensitive data.",
            'Implement scalable features to meet evolving business needs.',
            "Developed Relational database in Postgres using the Table per Hierarchy design to store data and associate it with different projects.",
        ],
    },
];

const ExperienceSection: React.FC<ExperienceItem> = ({year, title, details}) => {
    return (
        <div className="experience-item">
            <div>
                <div className="year">{year}</div>
                <div className="title" data-aos="fade-down" data-aos-delay="100">{title}</div>
            </div>
            <div className="details">
                <ul>
                    {details.map((detail, index) => (
                        <li key={index} data-aos="fade-left" data-aos-delay={`${index * 100}`}>
                            {detail}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Experience: React.FC = () => {
    return (
        <div className="experience-container">
            <h1 className="heading">My Journey</h1>
            <p className="paragraph"></p>
            <div className="experience-wrapper">
                {experienceData.map((item, index) => (
                    <ExperienceSection key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Experience;

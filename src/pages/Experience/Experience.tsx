import React from 'react';
import './Experience.scss';

interface ExperienceItem {
    year: string;
    title: string;
    details: string[];
}

const experienceData: ExperienceItem[] = [
    {
        year: 'May 2015 - Aug 2016',
        title: 'Systems Trainee Internship (SGI)',
        details: [
            'Managed and prioritized tasks across multiple teams.',
            'Installed and configured Linux and Windows servers.',
            'Traveled to multiple branches for server and router installation.',
            'Coordinated with weekend staff for supply orders and new switch installations.',
        ],
    },
    {
        year: '2014 - 2016',
        title: 'Business Information Systems (Two-Year Diploma)',
        details: [
            'Developed a full-stack web application using HTML, CSS, JavaScript, PHP, and MySQL.',
            'Gained expertise in Linux and Windows server administration.',
            'Studied various business and IT-related courses.',
            'Deepened understanding of data structures, algorithms, and Java programming.',
        ],
    },
    {
        year: '2018 - 2020',
        title: 'Developer (Contracts)',
        details: [
            'Led the development of a Java application for Cross Borders Drilling,\n' +
            'employing Swing for the user interface and SQLite for data storage\n' +
            'enabling efficient recording of drilled hole data',
            'Contributed to game development using C# in Unity at Melcher Studios.',
            "Designed Python and Java applications for data processing, \n" +
            "integration tasks, and producing Excel reports at Triton Public Awareness.",
        ],
    },
    {
        year: '2018 - 2020',
        title: 'Freelance Developer',
        details: [
            'Engineered a responsive content management web application with React, incorporating modern technologies like Axios, Redux, and advanced React hooks to ensure scalability and user-friendly responsive design.',
            'Implemented RESTful APIs fortified with JSON web tokens and bcrypt for user authentication mechanisms, ensuring endpoint security and scalability to meet evolving business requirements.',
            'Designed and managed relational databases, employing Prisma ORM for table mapping and enhanced database operations.',
            'Leveraged TypeScript to craft clean, maintainable, and type-safe asynchronous code, promoting seamless collaboration and codebase maintenance.',
            'Configured AWS environments for the deployment of server, client-side web applications, and databases in cloud-based infrastructures, ensuring optimal performance and scalability.'
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
            <p className="paragraph">

            </p>
            <div className="experience-wrapper">
                {experienceData.map((item, index) => (
                    <ExperienceSection key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Experience;

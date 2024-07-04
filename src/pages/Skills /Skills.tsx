import React, {useState} from 'react';
import './Skills.scss';
import {
    FaUsers,
    FaDatabase,
    FaCloud,
    FaJava,
    FaPython,
    FaServer,
    FaChartBar,
    FaSass,
    FaReact,
    FaAngular,
    FaMobileAlt,
    FaShieldAlt,
    FaCodeBranch,
    FaHtml5, FaCog
} from 'react-icons/fa';
import { AiOutlineRise, AiOutlineCode } from 'react-icons/ai';
import { SiTypescript, SiGithub, SiPrisma, SiGraphql } from 'react-icons/si';
import Header from "../../components/Header/Header.tsx";

const Skill = ({title, description, icon}: { title: string; description: string; icon: React.ReactNode }) => {
    return (
        <div className="skill-card" data-aos="fade-in">
            <div className="skill-icon">{icon}</div>
            <h3 className="skill-title">{title}</h3>
            <p className="skill-description">{description}</p>
        </div>
    );
}

const Skills = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('frontend'); // Set initial selected category to 'frontend'

    const handleCategorySelect = (category: string): void => {
        if (category === selectedCategory) {
            setSelectedCategory('frontend');
        } else {
            setSelectedCategory(category);
        }
    };

    const filteredData = selectedCategory ? Data.filter(skill => skill.category === selectedCategory) : Data;

    const headingData = {
        heading: "I Handle All Aspects of Full Stack Development to Launch Your Digital Solutions",
        desc: "Ensuring that everything from initial design and development to deployment, management, and scaling is expertly handled.",
    };

    return (
        <>
            <div className="skills-container">
                <Header heading={headingData.heading} desc={headingData.desc}/>
                <div className="category-buttons">
                    <button
                        className={`category-button ${selectedCategory === 'frontend' && 'active'}`}
                        onClick={() => handleCategorySelect('frontend')}
                    >
                        <FaHtml5/>
                        Frontend
                    </button>
                    <button
                        className={`category-button ${selectedCategory === 'backend' && 'active'}`}
                        onClick={() => handleCategorySelect('backend')}
                    >
                        <FaServer/>
                        Backend
                    </button>
                    <button
                        className={`category-button ${selectedCategory === 'other' && 'active'}`}
                        onClick={() => handleCategorySelect('other')}
                    >
                        <FaCloud/>
                        Other
                    </button>
                </div>
                <div className="skills-wrapper">
                    {filteredData.map((skill, index) => (
                        <Skill key={index} {...skill} />
                    ))}
                </div>
            </div>

        </>
    );
};

export default Skills;


const Data = [
    {
        title: 'Efficient UI Design',
        description: 'Design user flows that boost productivity, enhance efficiency, and reduce errors in your business operations.',
        icon: <AiOutlineRise />,
        category: 'frontend',
    },
    {
        title: 'Security-First Approach',
        description: 'Implement advanced security measures, including Web Tokens, encryption, and environment variables, to protect against unauthorized access.',
        icon: <FaShieldAlt />,
        category: 'backend',
    },
    {
        title: 'Client-Centered Development',
        description: 'Translate business requirements into customized web applications, ensuring seamless operations and user satisfaction.',
        icon: <FaUsers />,
        category: 'other',
    },
    {
        title: 'Database Architecture',
        description: 'Design and manage relational databases with MySQL and PostgreSQL, ensuring reliable data storage and retrieval.',
        icon: <FaDatabase />,
        category: 'backend',
    },
    {
        title: 'Clean Code Practices',
        description: 'Follow clean code principles by commenting and organizing code for readability and maintainability.',
        icon: <AiOutlineCode />,
        category: 'other',
    },
    {
        title: 'Scalable Systems',
        description: 'Utilize clean architecture principles to ensure seamless scaling and maintainability.',
        icon: <FaCodeBranch />,
        category: 'backend',
    },
    {
        title: 'Type Safety with TypeScript',
        description: 'Leverage TypeScript to provide enterprise-level stability and scalability.',
        icon: <SiTypescript />,
        category: 'frontend',
    },
    {
        title: 'Cloud Deployment',
        description: 'Configure cloud environments for seamless deployment and scalability using AWS.',
        icon: <FaCloud />,
        category: 'other',
    },
    {
        title: 'Version Control',
        description: 'Utilize Git for version control and code pipelines to ensure smooth scaling and collaboration.',
        icon: <SiGithub />,
        category: 'other',
    },
    {
        title: 'Efficient ORM with Prisma',
        description: 'Establish seamless database connections with Prisma ORM, simplifying table mapping and management.',
        icon: <SiPrisma />,
        category: 'backend',
    },
    {
        title: 'Java Development Background',
        description: 'Leverage a solid foundation in Java programming, adhering to object-oriented principles.',
        icon: <FaJava />,
        category: 'other',
    },
    {
        title: 'Python Development',
        description: 'Develop Python applications for automating data analysis and organization.',
        icon: <FaPython />,
        category: 'other',
    },
    {
        title: 'Systems Analysis',
        description: 'Identify and address potential user errors through in-depth business logic mapping.',
        icon: <FaCog />,  // Use the imported icon
        category: 'other',
    },

    {
        title: 'RESTful API Development',
        description: 'Engineer scalable and maintainable RESTful APIs with clean architecture for seamless integration.',
        icon: <FaServer />,
        category: 'backend',
    },
    {
        title: 'GraphQL API Development',
        description: 'Develop flexible data-fetching solutions using GraphQL APIs with Apollo Server for React applications.',
        icon: <SiGraphql />,
        category: 'backend',
    },
    {
        title: 'Data Analytics and Visualization',
        description: 'Create dashboards and data visualization tools to help businesses make informed decisions based on their data.',
        icon: <FaChartBar />,
        category: 'frontend',
    },
    {
        title: 'Styling with CSS/Sass',
        description: 'Create visually appealing, responsive, and consistent designs using CSS and Sass.',
        icon: <FaSass />,
        category: 'frontend',
    },
    {
        title: 'React Development',
        description: 'Build professional web applications with React, delivering high-performance user interfaces.',
        icon: <FaReact />,
        category: 'frontend',
    },
    {
        title: 'Angular Development',
        description: 'Design advanced web applications with Angular to enhance frontend architecture.',
        icon: <FaAngular />,
        category: 'frontend',
    },
    {
        title: 'Responsive Design Implementation',
        description: 'Ensure optimal user experience across all devices using responsive design techniques.',
        icon: <FaMobileAlt />,
        category: 'frontend',
    },
];

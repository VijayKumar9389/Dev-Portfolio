import React, {useState} from 'react';
import './Skills.scss';
import {FaLock, FaDatabase, FaCloud, FaJava, FaPython, FaServer, FaSass} from 'react-icons/fa';
import {FaHtml5, FaWeightScale} from "react-icons/fa6";
import {AiOutlineRise} from 'react-icons/ai';
import {SiTypescript, SiPrisma, SiGithub} from 'react-icons/si';

const Skill = ({title, description, icon}: { title: string; description: string; icon: React.ReactNode }) => {
    return (
        <div className="skill-card" data-aos="fade-up" data-aos-duration="1000">
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
            setSelectedCategory('frontend'); // Or any other default category you want to set
        } else {
            setSelectedCategory(category);
        }
    };

    const filteredData = selectedCategory ? Data.filter(skill => skill.category === selectedCategory) : Data;

    return (
        <>
            <div className="skills-container">
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
        title: 'Security First',
        description: 'Built with security in mind, employing JWT, Bcrypt, and environment variables to safeguard against unauthorized access.',
        icon: <FaLock/>,
        category: 'backend',
    },
    {
        title: 'Effective Solutions',
        description: 'Crafted digital solutions that boost efficiency, minimize errors, and enhance productivity.',
        icon: <AiOutlineRise/>,
        category: 'frontend',
    },
    {
        title: 'Robust Database Design',
        description: 'Designed relational databases using Postgres, implementing Table per Hierarchy for optimal data organization.',
        icon: <FaDatabase/>,
        category: 'other',
    },
    {
        title: 'Scalability Guaranteed',
        description: 'Followed clean architecture principles to ensure the system is easily maintainable and scalable.',
        icon: <FaWeightScale/>,
        category: 'backend',
    },
    {
        title: 'Type Safety Ensured',
        description: 'Enforced type safety with TypeScript, resulting in more stable and maintainable codebase.',
        icon: <SiTypescript/>,
        category: 'frontend',
    },
    {
        title: 'Seamless Cloud Deployment',
        description: 'Configured cloud environments for seamless deployment on AWS, ensuring reliability and scalability.',
        icon: <FaCloud/>,
        category: 'other',
    },
    {
        title: 'Efficient Version Control',
        description: 'Utilized Git for robust version control and efficient code pipeline management.',
        icon: <SiGithub/>,
        category: 'other',
    },
    {
        title: 'Streamlined Database Connectivity',
        description: 'Established seamless connections with databases using Prisma ORM, simplifying table mapping.',
        icon: <SiPrisma/>,
        category: 'backend',
    },
    {
        title: 'Proficient in Java',
        description: 'Proficient in Java programming following object-oriented principles.',
        icon: <FaJava/>,
        category: 'backend',
    },
    {
        title: 'Versatile Skill Set',
        description: 'Developed applications in Python and game designs using C#, showcasing versatility in programming languages.',
        icon: <FaPython/>,
        category: 'backend',
    },
    {
        title: 'RESTful API Development',
        description: 'Engineered RESTful APIs with Node.js, Express, and MySQL, ensuring efficient data exchange and communication.',
        icon: <FaServer/>,
        category: 'backend',
    },
    {
        title: 'Responsive Styling',
        description: 'Implemented responsive designs using Sass and Tailwind CSS, ensuring optimal user experience across devices.',
        icon: <FaSass/>,
        category: 'frontend',
    },
];




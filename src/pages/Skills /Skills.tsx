import React, {useState} from 'react';
import './Skills.scss';
import {
    FaLock,
    FaDatabase,
    FaCloud,
    FaJava,
    FaPython,
    FaServer,
    FaSass,
    FaBrain,
    FaReact, FaAngular, FaMobileAlt
} from 'react-icons/fa';
import {FaHtml5, FaWeightScale} from "react-icons/fa6";
import {AiOutlineRise} from 'react-icons/ai';
import {SiTypescript, SiPrisma, SiGithub} from 'react-icons/si';
import {GrGraphQl} from "react-icons/gr";

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
            setSelectedCategory('frontend');
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
        title: 'Security-First Approach',
        description: 'Implemented security measures such as JWT, Bcrypt, and environment variables to protect against unauthorized access.',
        icon: <FaLock/>,
        category: 'backend',
    },
    {
        title: 'Quick Learner',
        description: 'Proven ability to rapidly learn and work with new technologies. Experience coding in Java, Python, C#, and JavaScript.',
        icon: <FaBrain/>,
        category: 'other',
    },
    {
        title: 'Efficient Solutions',
        description: 'Crafted digital solutions that enhance efficiency, minimize errors, and boost productivity.',
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
        title: 'Scalability Ensured',
        description: 'Followed clean architecture principles to ensure the system is easily maintainable and scalable.',
        icon: <FaWeightScale/>,
        category: 'backend',
    },
    {
        title: 'Type Safety Maintained',
        description: 'Enforced type safety with TypeScript, resulting in a more stable and maintainable codebase.',
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
        description: 'Utilized Git for version control and efficient code pipeline management.',
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
        category: 'other',
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
        title: 'GraphQL Development',
        description: 'Experience developing GraphQL API  with Apollo Server and fetching data from React.',
        icon: <GrGraphQl />,
        category: 'backend',
    },
    {
        title: 'Styling with Sass/Tailwind CSS',
        description: 'Styled web applications with Sass and Tailwind CSS, ensuring consistent and visually appealing designs.',
        icon: <FaSass/>,
        category: 'frontend',
    },
    {
        title: 'React Development',
        description: 'Developed web applications with React, utilizing hooks and Redux for state management.',
        icon: <FaReact/>,
        category: 'frontend',
    },
    {
        title: 'Angular Development',
        description: 'Designed client prototypes with Angular, utilizing its robust libraries to achieve similar functionality.',
        icon: <FaAngular/>,
        category: 'frontend',
    },
    {
        title: 'Responsive Design Implementation',
        description: 'Implemented responsive designs using Sass and Tailwind CSS, ensuring optimal user experience across devices.',
        icon: <FaMobileAlt/>,
        category: 'frontend',
    },
];




import './Skills.scss';
import {FaLock, FaDatabase, FaCloud, FaJava, FaPython, FaServer, FaSass} from 'react-icons/fa';
import {FaWeightScale} from "react-icons/fa6";
import { AiOutlineRise } from 'react-icons/ai';
import { SiTypescript, SiPrisma, SiGithub } from 'react-icons/si';

const Data = [
    {
        title: 'Security First',
        description: 'Built with security in mind, employing JWT, Bcrypt, and environment variables to safeguard against unauthorized access.',
        icon: <FaLock />,
    },
    {
        title: 'Effective Solutions',
        description: 'Crafted digital solutions that boost efficiency, minimize errors, and enhance productivity.',
        icon: <AiOutlineRise />,
    },
    {
        title: 'Robust Database Design',
        description: 'Designed relational databases using Postgres, implementing Table per Hierarchy for optimal data organization.',
        icon: <FaDatabase />,
    },
    {
        title: 'Scalability Guaranteed',
        description: 'Followed clean architecture principles to ensure the system is easily maintainable and scalable.',
        icon: <FaWeightScale />,
    },
    {
        title: 'Type Safety Ensured',
        description: 'Enforced type safety with TypeScript, resulting in more stable and maintainable codebase.',
        icon: <SiTypescript />,
    },
    {
        title: 'Seamless Cloud Deployment',
        description: 'Configured cloud environments for seamless deployment on AWS, ensuring reliability and scalability.',
        icon: <FaCloud />,
    },
    {
        title: 'Efficient Version Control',
        description: 'Utilized Git for robust version control and efficient code pipeline management.',
        icon: <SiGithub />,
    },
    {
        title: 'Streamlined Database Connectivity',
        description: 'Established seamless connections with databases using Prisma ORM, simplifying table mapping.',
        icon: <SiPrisma />,
    },
    {
        title: 'Proficient in Java',
        description: 'Proficient in Java programming following object-oriented principles.',
        icon: <FaJava />,
    },
    {
        title: 'Versatile Skill Set',
        description: 'Developed applications in Python and game designs using C#, showcasing versatility in programming languages.',
        icon: <FaPython />,
    },
    {
        title: 'RESTful API Development',
        description: 'Engineered RESTful APIs with Node.js, Express, and MySQL, ensuring efficient data exchange and communication.',
        icon: <FaServer />,
    },
    {
        title: 'Responsive Styling',
        description: 'Implemented responsive designs using Sass and Tailwind CSS, ensuring optimal user experience across devices.',
        icon: <FaSass />,
    },
    // Add more sections as needed
];


const Skill = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
    return (
        <div className="skill-card" data-aos="fade-up" data-aos-duration="1000">
            <div className="skill-icon">{icon}</div>
            <h3 className="skill-title">{title}</h3>
            <p className="skill-description">{description}</p>
        </div>
    );
}

const Skills = () => {
    return (
        <div className="skills-container">
            <h1 className="heading">What Can I do for you?</h1>
            <p className="paragraph">
                I'm deeply passionate about software development, specializing in collaborating with clients to design and implement technical solutions
            </p>
            <div className="skills-wrapper">
                {Data.map((skill, index) => (
                    <Skill key={index} {...skill} />
                ))}
            </div>

        </div>
    );
};

export default Skills;

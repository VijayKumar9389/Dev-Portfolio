import './Skills.scss';
import { FaLock, FaDatabase, FaCloud, FaJava, FaPython, FaServer } from 'react-icons/fa';
import {FaWeightScale} from "react-icons/fa6";
import { AiOutlineRise } from 'react-icons/ai';
import { SiTypescript, SiPrisma, SiGithub, SiJavascript } from 'react-icons/si';

const Data = [
    {
        title: 'Secure Environment',
        description: 'Secure design utilizing JWT, Bcrypt, and environment variables to protect against unauthorized access.',
        icon: <FaLock />,
    },
    {
        title: 'Problem Solving',
        description: 'Effectively designed digital solutions to enhance efficiency, minimizes errors, and maximizes productivity.',
        icon: <AiOutlineRise />,
    },
    {
        title: 'Database Design',
        description: 'Developed Relational database in Postgres using the Table per Hierarchy design',
        icon: <FaDatabase />,
    },
    {
        title: 'Ready to Scale',
        description: 'Clean architecture design to ensure maintainability and scalability of the system.',
        icon: <FaWeightScale />,
    },
    {
        title: 'TypeScript',
        description: 'Enforced Typesafe to enhance stability and ensure cleaner, more maintainable code',
        icon: <SiTypescript />,
    },
    {
        title: 'Cloud Deployment',
        description: 'Configured cloud environment for deployment on AWS.',
        icon: <FaCloud />,
    },
    {
        title: 'Version Control',
        description: 'Utilized Git for version control and code pipeline management',
        icon: <SiGithub />,
    },
    {
        title: 'Prisma ORM',
        description: 'Establish a connection with the database for seamless table mapping',
        icon: <SiPrisma />,
    },
    {
        title: 'Java',
        description: 'Learned to program in Java following OOP principles and developed paid applications',
        icon: <FaJava />,
    },
    {
        title: 'Versatility',
        description: 'Developed applications in Python and game designs with C#',
        icon: <FaPython />,
    },
    {
        title: 'Restful API',
        description: 'Developed Restful API using Node.js, Express, and MySQL',
        icon: <FaServer />,
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

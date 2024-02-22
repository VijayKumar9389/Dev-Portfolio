import './Tech.scss';

import { BiLogoPostgresql } from 'react-icons/bi';
import { FaReact, FaAws, FaSass, FaServer, FaAngular } from 'react-icons/fa';
import { SiExpress, SiTypescript } from 'react-icons/si';
import { TbBrandNodejs, TbBrandMysql, TbBrandRedux } from 'react-icons/tb';
interface TechItem {
    icon: React.ReactNode;
    title: string;
}

const Technologies = () => {
    const techData: TechItem[] = [
        { icon: <FaReact className="services-icon" />, title: 'React' },
        { icon: <TbBrandNodejs className="services-icon" />, title: 'Node.js' },
        { icon: <SiExpress className="services-icon" />, title: 'Express' },
        { icon: <TbBrandMysql className="services-icon" />, title: 'MySQL' },
        { icon: <TbBrandRedux className="services-icon" />, title: 'Redux' },
        { icon: <FaAws className="services-icon" />, title: 'AWS' },
        { icon: <FaSass className="services-icon" />, title: 'SASS' },
        { icon: <FaServer className="services-icon" />, title: 'REST' },
        { icon: <SiTypescript className="services-icon" />, title: 'Typescript' },
        { icon: <BiLogoPostgresql className="services-icon" />, title: 'PostgreSQL' },
        { icon: <FaAngular className="services-icon" />, title: 'Angular' },
    ];

    return (
        <div className="marquee-container">
            <div className="marquee-wrapper">
                {techData.map((tech, index) => (
                    <div key={index} className="marquee-item">
                        <div className="services-card">
                            <div>{tech.icon}</div>
                            <h2>{tech.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;

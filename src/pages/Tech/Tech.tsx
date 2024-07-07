import './Tech.scss';
import {techData, TechItem} from "./Tech.data.ts";

const Technologies = () => {

    return (
        <div className="marquee-container">
            <div className="marquee-wrapper">
                {techData.map((tech: TechItem, index: number) => (
                    <div key={index} className="marquee-item">
                        <div className="services-card">
                            <tech.icon className="services-icon"/>
                            <h2>{tech.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;

import React, { useState } from 'react';
import './Skills.scss';
import { FaHtml5, FaServer, FaCloud } from 'react-icons/fa';
import Header from "../../components/Header/Header.tsx";
import {skillsData, skillsHeading} from "./Skills.data.ts";

const Skill = ({ title, description, icon: Icon }: { title: string; description: string; icon: React.ElementType }) => {
    return (
        <div className="skill-card" data-aos="fade-in">
            <div className="skill-icon"><Icon /></div>
            <h3>{title}</h3>
            <p>{description}</p>
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

    const filteredData = selectedCategory ? skillsData.filter(skill => skill.category === selectedCategory) : skillsData;

    return (
        <div className="skills-container">
            <Header heading={skillsHeading.heading} desc={skillsHeading.desc} />
            <div className="category-buttons">
                <button
                    className={`category-button ${selectedCategory === 'frontend' && 'active'}`}
                    onClick={() => handleCategorySelect('frontend')}
                >
                    <FaHtml5 />
                    Frontend
                </button>
                <button
                    className={`category-button ${selectedCategory === 'backend' && 'active'}`}
                    onClick={() => handleCategorySelect('backend')}
                >
                    <FaServer />
                    Backend
                </button>
                <button
                    className={`category-button ${selectedCategory === 'other' && 'active'}`}
                    onClick={() => handleCategorySelect('other')}
                >
                    <FaCloud />
                    Other
                </button>
            </div>
            <div className="skills-wrapper">
                {filteredData.map((skill, index) => (
                    <Skill key={index} {...skill} />
                ))}
            </div>
        </div>
    );
};

export default Skills;

import './About.scss';
import React from "react";

const About: React.FC<{title: string, desc: string}> = ({title, desc}) => {
    return (
        <section className="about-section">
            <h2 data-aos="fade-up">{title}</h2>
            <p className="paragraph" data-aos="fade-up" data-aos-delay="300">{desc}</p>
        </section>
    );
};

export default About;

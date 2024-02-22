import {useEffect, useState} from 'react';
import './Hero.scss';
import image from '../../assets/images/App.svg';
import AOS from "aos";

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect((): void => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const parallaxStyle = {
        transform: `translateY(${scrollY * 0.5}px)`, // Adjust the multiplier for the parallax effect
    };

    return (
        <section className="hero-container">
            {/*<ParticleBackground />*/}
            <div className="hero-content">
                <h2 data-aos="fade-down">
                    Welcome!
                </h2>
                <p className="p-hero" data-aos="fade-right">
                    To my developers portfolio.
                </p>
            </div>
            <img
                style={parallaxStyle}
                src={image}
                alt="Hero Image"
                className="hero-image"
            />
        </section>
    );
};

export default Hero;

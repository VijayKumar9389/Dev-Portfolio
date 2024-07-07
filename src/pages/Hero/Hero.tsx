import { useEffect, useState } from 'react';
import './Hero.scss';
import image from '../../assets/images/Laptops.png';
import AOS from "aos";

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const parallaxStyle = {
        transform: `translateX(${scrollY * 0.5}px)`,
        opacity: 1 - scrollY / 1000,
    };

    const reverseParallaxStyle = {
        transform: `translateX(-${scrollY * 0.5}px)`,
        opacity: 1 - scrollY / 1000,
    };
    return (
        <section className="hero-container">
            <div className="hero-content">
                <img
                    style={reverseParallaxStyle}
                    src={image}
                    alt="Hero Image"
                    className="hero-image"
                />
                <h1 style={parallaxStyle} className="hero-title">
                    Got a Vision? Let's Build <strong>Your Perfect Business Tool</strong>.
                </h1>
            </div>
        </section>
    );
};

export default Hero;

import './Navbar.scss';
import {useEffect, useState} from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className={`navbar  ${isScrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                <h2 onClick={() => window.scrollTo(0, 0)}>VK Studios</h2>
            </div>
            <div className="nav-menu">
                <ScrollLink to="skills-container" className="nav-link" spy={true} smooth={true} offset={-70} duration={500}>Skills</ScrollLink>
                <ScrollLink to="work-container" className="nav-link" spy={true} smooth={true} offset={-70} duration={500}>Work</ScrollLink>
                <ScrollLink to="experience-container" className="nav-link" spy={true} smooth={true} offset={-70} duration={500}>Experience</ScrollLink>
                <ScrollLink to="contact" spy={true} smooth={true} duration={500}><button className="btn-contact">Contact</button></ScrollLink>
            </div>
            <button onClick={toggleModal} className="menu-btn">
                <IoMenu />
            </button>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content" data-aos="fade-left" data-aos-duration="300">
                        <div className="btn-container">
                            <button className="menu-btn" onClick={toggleModal}><IoClose/></button>
                        </div>
                        <div className="modal-menu">
                            <ScrollLink to="skills-container" className="modal-link" onClick={toggleModal} spy={true} smooth={true} offset={-70} duration={500}>Skills</ScrollLink>
                            <ScrollLink to="work-container" className="modal-link" onClick={toggleModal} spy={true} smooth={true} offset={-70} duration={500}>Work</ScrollLink>
                            <ScrollLink to="experience-container" className="modal-link" onClick={toggleModal} spy={true} smooth={true} offset={-70} duration={500}>Experience</ScrollLink>
                            <ScrollLink to="contact" onClick={toggleModal} spy={true} smooth={true} offset={-70} duration={500}><button className="btn-contact">Contact</button></ScrollLink>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

}

export default Navbar;

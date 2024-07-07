// Modal.jsx
import React from "react";
import { IoClose } from "react-icons/io5";
import { Link as ScrollLink } from 'react-scroll';
import './Sidebar.scss';

interface ModalProps {
    isOpen: boolean;
    toggleModal: () => void;
}

const Sidebar: React.FC<ModalProps> = ({ isOpen, toggleModal }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content" data-aos="fade-left" data-aos-duration="300">
                <div className="btn-container">
                    <button className="menu-btn" onClick={toggleModal}><IoClose/></button>
                </div>
                <div className="modal-menu">
                    <ScrollLink to="skills-container" className="modal-link" onClick={toggleModal} spy={true} smooth={true} offset={-70} duration={500}>Skills</ScrollLink>
                    <ScrollLink to="work-container" className="modal-link" onClick={toggleModal} spy={true} smooth={true} offset={-70} duration={500}>Work</ScrollLink>
                    <ScrollLink to="experience-container" className="modal-link" onClick={toggleModal} spy={true} smooth={true} offset={-70} duration={500}>Experience</ScrollLink>
                </div>
                    <ScrollLink to="contact" onClick={toggleModal} spy={true} smooth={true} offset={-70} duration={500}><button className="btn-contact">Contact</button></ScrollLink>
            </div>
        </div>
    );
}

export default Sidebar;

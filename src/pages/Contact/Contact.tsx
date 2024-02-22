import './Contact.scss';
import {FaGithub} from 'react-icons/fa';
import {IoLocationOutline, IoMail, IoPhonePortrait, IoDocumentTextOutline} from 'react-icons/io5';
import resumePDF from '../../assets/resume.pdf';
import Image from '../../assets/images/meet.svg';
import {FiSend} from "react-icons/fi";


const Contact = () => {

    const contactEmail = 'Vijaymkumar2095@gmail.com';

    return (
        <div className="contact">
            <div className="custom-shape-divider-bottom-1698512698">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"></path>
                </svg>
            </div>
            <div className="contact-wrapper">
                <div className="contact-header">
                    <h1>Lets Get In Contact!</h1>
                    <img
                        src={Image}
                        alt="Footer Image"
                        className="hero-image"
                    />
                </div>
                <div className="contact-column">
                    <div className="contact-item" data-aos="fade-in">
                        <IoLocationOutline/>
                        <p>Saskatoon, SK</p>
                    </div>
                    <div className="contact-item" data-aos="fade-in">
                        <IoPhonePortrait/>
                        <p>+1 (306) 994-5031</p>
                    </div>
                    <div className="contact-item" data-aos="fade-in">
                        <IoMail/>
                        <p>VijayMKumar9389@gmail.com</p>
                    </div>
                    <div className="contact-item" data-aos="fade-in">
                        <IoDocumentTextOutline/>
                        <a href={resumePDF} download="resume.pdf">
                            Download Resume
                        </a>
                    </div>
                    <div className="contact-item" data-aos="fade-in">
                        <FiSend/>
                        <a href={`mailto:${contactEmail}`}>
                            Email Me
                        </a>
                    </div>
                    <div className="contact-item" data-aos="fade-in">
                        <FaGithub/>
                        <a href="https://github.com/VijayKumar9389" target="_blank" rel="noreferrer">
                            View My GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
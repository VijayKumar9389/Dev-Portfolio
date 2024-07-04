import './Contact.scss';
import {FaGithub} from 'react-icons/fa';
import {IoLocationOutline, IoMail, IoPhonePortrait, IoDocumentTextOutline} from 'react-icons/io5';
import resumePDF from '../../assets/resume.pdf';
import Image from '../../assets/images/Meet.svg';
import {FiSend} from "react-icons/fi";

const Contact = () => {

    const contactEmail = 'Vijaymkumar2095@gmail.com';

    return (
        <div className="contact">
            <div className="contact-wrapper">
                <div className="contact-header">
                    <h1>Lets Get In Touch!</h1>
                    <img
                        src={Image}
                        alt="Footer Image"
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

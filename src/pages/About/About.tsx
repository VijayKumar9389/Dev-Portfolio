import svgone from "../../assets/images/meet.svg";
import svgtwo from "../../assets/images/Frontend.svg";
import svgthree from "../../assets/images/Cloud.svg";
import './About.scss';
import Header from "../../components/Header/Header.tsx";


const About = () => {

    const headingData = {
        heading: "Let's Develop Custom Information Systems Tailored to Your Specific Business Operations.",
        desc: "",
    };

    return (
        <div className="about-us-container">
            <Header heading={headingData.heading} desc={headingData.desc}/>
            <div className="core-competencies">
                <div className="competency-card" data-aos="fade-left" data-aos-delay="000">
                    <img src={svgone} alt="Web Application Services" className="competency-icon"/>
                    <div>
                        <h3>Product Research and Design</h3>
                        <p>
                            I specialize in understanding client needs and translating business logic into streamlined
                            web applications.
                            From user flow to data modeling, every aspect is tailored to reflect your operations.
                        </p>
                    </div>
                </div>
                <div className="competency-card" data-aos="fade-left" data-aos-delay="300">
                    <img src={svgtwo} alt="Reactive Design" className="competency-icon"/>
                    <div>
                        <h3>Full-Stack Development</h3>
                        <p>
                            I develop web applications designed to visualize information and provide insights,
                            with user flows optimized to streamline operations.
                            My solutions are secure and accessible across various devices and screen sizes.
                        </p>
                    </div>
                </div>
                <div className="competency-card" data-aos="fade-left" data-aos-delay="600">
                    <img src={svgthree} alt="Cloud Deployment" className="competency-icon"/>
                    <div>
                        <h3>Cloud Deployment</h3>
                        <p>
                            Securely store and access all your business data in the cloud. My solutions are protected
                            against unauthorized access and are scalable to grow with your business.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

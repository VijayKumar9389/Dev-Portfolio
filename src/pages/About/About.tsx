import svgone from "../../assets/images/meet.svg";
import svgtwo from "../../assets/images/Frontend.svg";
import svgthree from "../../assets/images/Cloud.svg";
import './About.scss';
import Header from "../../components/Header/Header.tsx";

const competencies = [
    {
        img: svgone,
        alt: "Web Application Services",
        title: "Product Research and Design",
        description: "I specialize in understanding client needs and translating business logic into streamlined web applications. From user flow to data modeling, every aspect is tailored to reflect your operations.",
        delay: "000",
    },
    {
        img: svgtwo,
        alt: "Reactive Design",
        title: "Full-Stack Development",
        description: "I develop web applications designed to visualize information and provide insights, with user flows optimized to streamline operations. My solutions are secure and accessible across various devices and screen sizes.",
        delay: "300",
    },
    {
        img: svgthree,
        alt: "Cloud Deployment",
        title: "Cloud Deployment",
        description: "Securely store and access all your business data in the cloud. My solutions are protected against unauthorized access and are scalable to grow with your business.",
        delay: "600",
    }
];

const About = () => {
    const headingData = {
        heading: "Let's Develop Custom Information Systems Tailored to Your Specific Business Operations.",
        desc: "",
    };

    return (
        <div className="about-us-container">
            <Header heading={headingData.heading} desc={headingData.desc} />
            <div className="core-competencies">
                {competencies.map((competency, index) => (
                    <div className="competency-card" data-aos="fade-left" data-aos-delay={competency.delay} key={index}>
                        <img src={competency.img} alt={competency.alt} className="competency-icon" />
                        <div>
                            <h3>{competency.title}</h3>
                            <p>{competency.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;

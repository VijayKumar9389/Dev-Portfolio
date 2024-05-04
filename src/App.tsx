import Hero from "./pages/Hero/Hero.tsx";
import Skills from "./pages/Skills /Skills.tsx";
import Work from "./pages/Work/Work.tsx";
import Tech from "./pages/Tech/Tech.tsx";
import './styles/App.scss';
import Experience from "./pages/Experience/Experience.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import AOS from "aos";
import 'aos/dist/aos.css';
import './styles/index.css';
import {useEffect} from "react";
import Contact from "./pages/Contact/Contact.tsx";
import Project from "./pages/Projects/Project.tsx";
import About from "./pages/About/About.tsx";

const App = () => {

    useEffect((): void => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <div className="app-container">
            <Navbar></Navbar>
            <div className="app-wrapper">
                <Hero/>
                <Tech/>
                <About
                    title="About Me"
                    desc="Experienced full-stack web developer with a two-year Diploma in Business Information Systems and demonstrated history of building
                enterprise-level applications. Skilled in front-end and back-end development using modern technologies such as React, Node.js,
                and Express.js. Proficient in designing and implementing RESTful APIs for seamless data interaction and building responsive user
                interfaces for enhanced user experience."/>
                <Skills/>
                <About
                    title="OnTract Project"
                    desc="Developed an enterprise web application for an emergency management company, allowing efficient management of delivery, inventory, and stakeholder information by project.
                The application included features such as automated data organization from Excel files, robust security measures with an access token system, responsive design for field agents, and functionalities for managing deliveries, inventory, user creation, and project file uploads.
                The project significantly improved operational efficiency and reduced errors, marking it a success for the company."/>
                <Work/>
                <Experience/>
                <Project/>
                <Contact/>
                {/*<Footer/>*/}
            </div>
        </div>
    )
}

export default App

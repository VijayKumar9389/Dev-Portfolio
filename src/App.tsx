// External Libraries
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

// Components
import Navbar from "./components/Navbar/Navbar.tsx";

// Pages
import Hero from "./pages/Hero/Hero.tsx";
import Skills from "./pages/Skills/Skills.tsx";
import Work from "./pages/Work/Work.tsx";
import Tech from "./pages/Tech/Tech.tsx";
import Experience from "./pages/Experience/Experience.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Project from "./pages/Projects/Project.tsx";
import About from "./pages/About/About.tsx";

// Styles
import './styles/App.scss';
import './styles/index.css';

const App = () => {

    useEffect((): void => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <div className="app-container">
            <Navbar/>
            <div className="app-wrapper">
                <Hero/>
                <Tech/>
                <About/>
                <Skills/>
                <Work/>
                <Experience/>
                <Project/>
                <Contact/>
            </div>
        </div>
    )
}

export default App

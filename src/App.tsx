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
                <About />
                <Skills/>
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

import Hero from "./pages/Hero/Hero.tsx";
import Skills from "./pages/Skills /Skills.tsx";
import Work from "./pages/Work/Work.tsx";
import Tech from "./pages/Tech/Tech.tsx";
import './styles/App.scss';
import Experience from "./pages/Experience/Experience.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import AOS from "aos";
import 'aos/dist/aos.css'; // Import AOS CSS fil
import './styles/index.css';
import {useEffect} from "react";
import Contact from "./pages/Contact/Contact.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Project from "./pages/Projects/Project.tsx";

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
                <Skills/>
                <Tech/>
                <Work/>
                <Project/>
                <Experience/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    )
}

export default App

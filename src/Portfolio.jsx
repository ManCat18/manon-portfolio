// Portfolio.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/sections/About';
import Experiences from './components/sections/Experiences';
import Formations from './components/sections/Formations';
import Competences from './components/sections/Competences';
import Projets from './components/sections/Projets';
import Footer from './components/Footer';

const Portfolio = () => {
    const [age, setAge] = useState(0);
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const calculateAge = () => {
            const birthDate = new Date('2003-11-18');
            const today = new Date();
            const ageInMs = today - birthDate;
            const ageInYears = ageInMs / (365.25 * 24 * 60 * 60 * 1000);
            setAge(Math.round(ageInYears));
        };
        calculateAge();
        const interval = setInterval(calculateAge, 1000);
        return () => clearInterval(interval);

    }, []);
    
    useEffect(() => {
        const timer = setTimeout(() => window.location.reload(), 60000*10);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <Header age={age} />
            <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
            <main >
                {activeSection === 'about' && <About />}
                {activeSection === 'formation' && <Formations />}
                {activeSection === 'experience' && <Experiences />}
                {activeSection === 'competences' && <Competences />}
                {activeSection === 'projets' && <Projets />}
            </main>
            <Footer />
        </div>
    );
};

export default Portfolio;

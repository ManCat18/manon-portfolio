// components/Navigation.jsx
import React from 'react';

const Navigation = ({ activeSection, setActiveSection }) => {
    const sections = [
        { id: 'about', label: 'À Propos' },
        { id: 'formation', label: 'Formations' },
        { id: 'experience', label: 'Expériences' },
        { id: 'competences', label: 'Compétences' },
        { id: 'projets', label: 'Projets' }
    ];

    return (
        <nav className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-lg z-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-center space-x-8 py-4">
                    {sections.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveSection(item.id)}
                            className={`px-4 py-2 rounded-lg transition-all ${activeSection === item.id
                                    ? 'bg-amber-600 text-white shadow-lg'
                                    : 'text-amber-800 hover:bg-amber-100'
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navigation;

// components/Navigation.jsx
import React from 'react';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection }) => {
    const [isOpen, setIsOpen] = useState(false);

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
                {/* Bouton menu mobile */}
                <div className="flex justify-between items-center py-4 md:hidden">
                    <div className="text-lg font-bold text-amber-800">Menu</div>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-amber-800">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Menu mobile (vertical) */}
                {isOpen && (
                    <div className="flex flex-col space-y-2 pb-4 md:hidden">
                        {sections.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveSection(item.id);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-4 py-2 rounded-lg transition-all ${activeSection === item.id
                                        ? 'bg-amber-600 text-white shadow'
                                        : 'text-amber-800 hover:bg-amber-100'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}

                {/* Menu desktop (horizontal) */}
                <div className="hidden md:flex justify-center space-x-8 py-4">
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

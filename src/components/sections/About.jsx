// components/sections/About.jsx
import React from 'react';
import {Plane, Code, Gamepad2, Clapperboard, Flag} from 'lucide-react';

const About = () => {
    return (
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">À Propos</h2>
            <div className="text-lg text-gray-700 leading-relaxed">
                <p className="mb-4">
                    Actuellement diplomée d’une licence informatique de l’université de Tours, je suis à la recherche de mon premier emploi. 
                    Forte d’une expérience de gestion d’équipe et en relation sociale, je saurais être un plus dans une équipe.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div>
                        <h3 className="text-xl font-semibold text-amber-800 mb-4">Langues</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <Flag className="w-5 h-5 text-amber-700 rounded-full"/>
                                <span>Français</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Flag className="w-5 h-5 text-amber-600 rounded-full"/>
                                <span>Anglais</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Flag className="w-5 h-5 text-amber-500 rounded-full"/>
                                <span>Allemand</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-amber-800 mb-4">Centres d'intérêt</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <Plane className="w-5 h-5 rounded-full text-amber-700"/>
                                <span>Voyage, culture</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Code className="w-5 h-5 rounded-full text-amber-600"/>
                                <span>Programmation web, administration de base de donnée</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Gamepad2 className="w-5 h-5 rounded-full text-amber-500"/>
                                <span>Jeu vidéo type coopératif</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clapperboard className="w-5 h-5 rounded-full text-amber-400"/>
                                <span>Cinéma : films, manga, films d'animation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

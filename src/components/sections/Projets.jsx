// components/sections/Projets.jsx
import React from 'react';

const projets = [
    {
        title: "PROJET PERSONNEL - Quizz",
        description: "Site web permettant de jouer à des quizz et en créer",
        technologies: ["HTML", "CSS", "PHP", "SQL"]
    },
    {
        title: "NUIT DE L'INFORMATIQUE 2021",
        description: "Gestion d'un projet informatique durant une nuit : optimisation d'un site déjà existant des « Sauveteurs du Dunkerquois » (insertion d'une base de données pour les utilisateurs)",
        technologies: ["Base de données", "Optimisation"]
    },
    {
        title: "DEVELOPPEMENT D'UN SITE WEB - Cinéma",
        description: "Site web sur le thème du cinéma",
        technologies: ["HTML", "CSS", "PHP", "SQL"]
    }
];

const Projets = () => {
    return (
        <section className="space-y-6 p-8 mb-8">
            <h2 className="text-3xl font-bold text-amber-900 mb-8">Projets</h2>
            {projets.map((projet, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-xl font-bold text-amber-900 mb-4">{projet.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{projet.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {projet.technologies.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Projets;

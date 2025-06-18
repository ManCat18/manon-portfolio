// components/sections/Experiences.jsx
import React from 'react';

const experiences = [
    {
        period: "AVRIL 2025 - JUIN 2025",
        title: "Product Owner - Stagiaire",
        company: "INNOVQUBE | NOISY-LE-GRAND",
        tasks: [
            "Gestion de projet et d'équipe",
            "Animation de réunions et formations",
            "Documentation",
            "Réorganisation d'équipe"
        ]
    },
    {
        period: "AVRIL 2024 - ACTUEL",
        title: "Equipière Polyvalente Etudiante",
        company: "LIDL | SAINT-GERVAIS-LA-FORÊT",
        tasks: [
            "Mise en rayon",
            "Inventaire",
            "Caisse",
            "Fermeture & ouverture",
            "Preparation de commande"
        ]
    },
    {
        period: "AVRIL 2023 - AVRIL 2024",
        title: "Equipière Polyvalente Etudiante",
        company: "McDonald's | VINEUIL",
        tasks: [
            "Gestion cuisson des viandes et fritures",
            "Service à table & Drive",
            "Nettoyage & Fermeture"
        ]
    }
];

const Experiences = () => {
    return (
        <section className="space-y-6 p-8 mb-8">
            <h2 className="text-3xl font-bold text-amber-900 mb-8">Expériences Professionnelles</h2>
            {experiences.map((exp, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                        <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg text-sm font-medium">
                            {exp.period}
                        </span>
                        <div>
                            <h3 className="text-xl font-bold text-amber-900">{exp.title}</h3>
                            <p className="text-amber-700">{exp.company}</p>
                        </div>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2">
                        {exp.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-center gap-3 text-gray-700">
                                <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                                {task}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default Experiences;

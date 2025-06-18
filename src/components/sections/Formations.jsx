// components/sections/Experiences.jsx
import React from 'react';

const formations = [
    {
        period: "2024 - 2025",
        title: "LICENCE 3",
        school: "Université François Rabelais | BLOIS",
        subjects: [
            "Structuration & analyse de données",
            "Programmation web (Java)",
            "Gestion d'entreprise",
            "Programmation applicative (Java)",
            "Introduction à l'intelligence artificielle"
        ]
    },
    {
        period: "2021 - 2024",
        title: "LICENCE 1 & 2",
        school: "Université François Rabelais | BLOIS",
        subjects: [
            "Programmation orientée objet (Java Python)",
            "SQL",
            "Programmation web (HTML CSS PHP)"
        ]
    },
    {
        period: "2020 - 2021",
        title: "BACCALAUREAT GENERAL",
        school: "Lycée Jean-Jacques HENNER | ALTKIRCH",
        subjects: [
            "Spécialités : Mathématique (1ère)",
            "NSI (Numérique et Sciences Informatiques)",
            "SVT (Sciences de la Vie et de la Terre)"
        ]
    }
];

const Formations = () => {
    return (
        <section className="space-y-6 p-8 mb-8">
            <h2 className="text-3xl font-bold text-amber-900 mb-8">Formations</h2>
            {formations.map((form, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                        <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg text-sm font-medium">
                            {form.period}
                        </span>
                        <div>
                            <h3 className="text-xl font-bold text-amber-900">{form.title}</h3>
                            <p className="text-amber-700">{form.school}</p>
                        </div>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2">
                        {form.subjects.map((subjects, formIndex) => (
                            <li key={formIndex} className="flex items-center gap-3 text-gray-700">
                                <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                                {subjects}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default Formations;

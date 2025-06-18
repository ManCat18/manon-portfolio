// components/sections/Competences.jsx
import React from 'react';
import { Globe, Database, Code, Users, Calendar, Award } from 'lucide-react';

const competences = [
    {
        category: "Langages web",
        skills: ["HTML", "CSS", "PHP"],
        icon: <Globe className="w-5 h-5" />
    },
    {
        category: "Gestion de données",
        skills: ["SQL", "PDO (PHP)"],
        icon: <Database className="w-5 h-5" />
    },
    {
        category: "Administration BDD",
        skills: ["MySQL", "Oracle"],
        icon: <Database className="w-5 h-5" />
    },
    {
        category: "Orienté objet",
        skills: ["Python", "Java", "VBA (notions)"],
        icon: <Code className="w-5 h-5" />
    }
];

const softSkills = [
    { name: "Travail en équipe", icon: <Users className="w-5 h-5" /> },
    { name: "Relation client", icon: <Users className="w-5 h-5" /> },
    { name: "Organisation", icon: <Calendar className="w-5 h-5" /> },
    { name: "Autonomie", icon: <Award className="w-5 h-5" /> }
];

const Competences = () => {
    return (
        <section className="space-y-6 p-8 mb-8">
            <h2 className="text-3xl font-bold text-amber-900 mb-8">Compétences</h2>

            <div>
                <h3 className="text-2xl font-semibold text-amber-800 mb-6">Compétences Techniques</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {competences.map((comp, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
                                    {comp.icon}
                                </div>
                                <h4 className="font-semibold text-amber-900">{comp.category}</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {comp.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-sm border border-amber-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-semibold text-amber-800 mb-6">Compétences Transversales</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {softSkills.map((skill, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-xl p-6 text-center">
                            <div className="bg-amber-100 p-3 rounded-full w-fit mx-auto mb-3 text-amber-600">
                                {skill.icon}
                            </div>
                            <p className="font-medium text-amber-900">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Competences;

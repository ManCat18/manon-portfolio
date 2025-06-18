// components/Footer.jsx
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-amber-900 text-white py-8 mt-16">
            <div className="max-w-6xl mx-auto px-6 text-center ">
                <p className="mb-4">Manon Cattaneo - Portfolio 2025</p>
                <div className="flex flex-col md:flex-row justify-center items-center sm:gap-2 md:gap-6 text-amber-200 text-center text-base">
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>cattaneo.manon1@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>+33 6 21 52 67 65</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

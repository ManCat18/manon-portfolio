// components/Header.jsx
import React from 'react';
import { Mail, Phone, MapPin, Car } from 'lucide-react';

const Header = ({ age }) => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-amber-100 to-orange-200 py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-200/30 to-orange-300/30 animate-pulse"></div>
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* <--!<div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
          MC
        </div>--> */}
        <h1 className="text-5xl font-bold text-amber-900 mb-4">Manon Cattaneo</h1>
        <p className="text-xl text-amber-800 mb-8">Étudiante L3 Informatique • En recherche d'alternance</p>

        <div className="flex justify-center gap-8 mb-8">
          <div className="bg-white/80 rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-amber-800">3</div>
            <div className="text-sm text-amber-600">années d'études</div>
          </div>
          <div className="bg-white/80 rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-amber-800">{age}</div>
            <div className="text-sm text-amber-600">ans</div>
          </div>
          <div className="bg-white/80 rounded-lg p-6 shadow-lg">
            <div className="text-3xl font-bold text-amber-800">8+</div>
            <div className="text-sm text-amber-600">technologies</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 text-amber-800">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span>cattaneo.manon1@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span><strong> +33 </strong> 6 21 52 67 65</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>BLOIS 41000</span>
          </div>
          <div className="flex items-center gap-2">
            <Car className="w-5 h-5" />
            <span>Permis B • avec voiture</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

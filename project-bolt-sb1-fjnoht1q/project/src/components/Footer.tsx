import React from 'react';
import { Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-serif mb-6">Domača Hiša</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin size={20} />
                <span>Ulica 123, Ljubljana</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} />
                <span>(02) 250 80 80</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} />
                <span>info@domacahisa.si</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-6">Delovni Čas</h3>
            <div className="space-y-2">
              <p>Ponedeljek - Petek: 6:00 - 22:00</p>
              <p>Sobota - Nedelja: 7:00 - 23:00</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-6">E-novice</h3>
            <p className="mb-4">Prijavite se in bodite obveščeni o jedeh za naslednji dan ter tedenskih posebnostih!</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Vaš e-naslov"
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
              />
              <button className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-r-lg transition-colors duration-200">
                Prijava
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-gray-300 transition-colors duration-200">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors duration-200">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
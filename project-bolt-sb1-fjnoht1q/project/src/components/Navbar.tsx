import React from 'react';
import { Menu, Phone, Clock } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-serif font-bold text-gray-900">Domača Hiša</h1>
            <div className="hidden md:flex space-x-6">
              <NavLink href="#home">Domov</NavLink>
              <NavLink href="#menu">Meni</NavLink>
              <NavLink href="#specials">Posebnosti</NavLink>
              <NavLink href="#gallery">Galerija</NavLink>
              <NavLink href="#about">O nas</NavLink>
              <NavLink href="#contact">Kontakt</NavLink>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={18} className="text-gray-700" />
              <span className="text-sm">(02) 250 80 80</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={18} className="text-gray-700" />
              <span className="text-sm">6:00 - 22:00</span>
            </div>
          </div>
          
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
  >
    {children}
  </a>
);

export default Navbar;
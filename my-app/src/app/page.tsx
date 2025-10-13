'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-pink-50 via-sky-50 to-purple-50 flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(/img/mariuxi.jpg)',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Cursor dinámico */}
      <div 
        className="fixed w-4 h-4 bg-gradient-to-r from-pink-500 to-sky-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transition: 'all 0.1s ease-out'
        }}
      />
      
      {/* Elementos de fondo animados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/30 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-24 h-24 bg-sky-200/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-200/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-pink-300/25 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Overlay dinámico */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-[1px]"></div>
      
      {/* Contenido principal */}
      <div className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Logo flotante */}
        <div className="mb-8 animate-pulse-soft">
          <Image src="/img/logo_mariuxi.png" alt="Logo María Auxiliadora" width={96} height={96} className="w-24 h-24 mx-auto" />
        </div>
        
        <h1 className={`font-display text-4xl md:text-7xl font-bold text-gray-800 mb-6 text-shadow-soft transition-all duration-700 ${
          isVisible ? 'animate-fade-in-up' : ''
        }`} style={{ animationDelay: '0.2s' }}>
          Unidad Educativa
        </h1>
        
        <h2 className={`font-heading text-3xl md:text-6xl font-black mb-6 text-gradient transition-all duration-700 ${
          isVisible ? 'animate-fade-in-up' : ''
        }`} style={{ animationDelay: '0.4s' }}>
          &ldquo;María Auxiliadora&rdquo;
        </h2>
        
        <p className={`font-display text-xl md:text-3xl text-gray-700 mb-8 font-medium italic transition-all duration-700 ${
          isVisible ? 'animate-fade-in-up' : ''
        }`} style={{ animationDelay: '0.6s' }}>
          Educar con el corazón para la vida
        </p>
        
        <div className={`flex items-center justify-center gap-4 mb-10 transition-all duration-700 ${
          isVisible ? 'animate-fade-in-up' : ''
        }`} style={{ animationDelay: '0.8s' }}>
          <div className="h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent w-20"></div>
          <p className="font-body text-lg text-gray-600 font-medium px-4 bg-white/50 rounded-full py-2">
            Julio Andrade - Carchi | Desde 1943
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent w-20"></div>
        </div>
        
        {/* Botones dinámicos */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center mt-12 transition-all duration-700 ${
          isVisible ? 'animate-fade-in-up' : ''
        }`} style={{ animationDelay: '1s' }}>
          <button className="group relative bg-gradient-to-r from-pink-600 to-pink-700 text-white px-10 py-4 rounded-2xl font-heading font-semibold text-lg hover-lift overflow-hidden transition-all duration-300 hover:scale-105">
            <span className="relative z-10">Información</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-700 to-pink-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-sky-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          </button>
          
          <button className="group relative border-2 border-sky-500 text-sky-600 px-10 py-4 rounded-2xl font-heading font-semibold text-lg hover-lift overflow-hidden transition-all duration-300 hover:scale-105 hover:border-sky-600">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contacto</span>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
        
        {/* Indicador de scroll */}
        <div className={`mt-16 animate-bounce transition-all duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} style={{ animationDelay: '1.2s' }}>
          <div className="flex flex-col items-center gap-2">
            <span className="font-body text-sm text-gray-500 uppercase tracking-wider">Descubre más</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-pink-500 to-sky-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => {
          // Valores predefinidos para evitar problemas de hidratación
          const positions = [
            { left: 15, top: 25, delay: 0.5, duration: 4.2 },
            { left: 85, top: 15, delay: 1.2, duration: 5.8 },
            { left: 45, top: 85, delay: 2.1, duration: 3.5 },
            { left: 75, top: 55, delay: 0.8, duration: 6.2 },
            { left: 25, top: 75, delay: 3.5, duration: 4.8 },
            { left: 95, top: 35, delay: 1.8, duration: 5.2 },
            { left: 5, top: 95, delay: 2.8, duration: 3.8 },
            { left: 65, top: 5, delay: 0.3, duration: 4.5 },
            { left: 35, top: 65, delay: 4.2, duration: 5.5 },
            { left: 55, top: 45, delay: 1.5, duration: 6.8 },
            { left: 80, top: 80, delay: 3.2, duration: 4.1 },
            { left: 20, top: 20, delay: 0.9, duration: 5.9 },
            { left: 90, top: 60, delay: 2.5, duration: 3.2 },
            { left: 10, top: 40, delay: 1.7, duration: 4.9 },
            { left: 70, top: 90, delay: 3.8, duration: 5.1 },
            { left: 40, top: 10, delay: 0.6, duration: 6.5 },
            { left: 60, top: 70, delay: 2.9, duration: 3.9 },
            { left: 30, top: 30, delay: 4.5, duration: 4.7 },
            { left: 85, top: 85, delay: 1.1, duration: 5.3 },
            { left: 15, top: 50, delay: 3.7, duration: 6.1 }
          ];
          
          const pos = positions[i] || positions[0];
          
          return (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-sky-400 rounded-full animate-float opacity-30"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                animationDelay: `${pos.delay}s`,
                animationDuration: `${pos.duration}s`
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

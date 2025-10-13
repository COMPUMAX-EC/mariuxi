'use client';

import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
// Import global CSS styles
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function DynamicHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3 animate-slide-in-left">
            <div className="relative">
              <Image 
                src="/img/logo_mariuxi.png" 
                alt="Logo María Auxiliadora" 
                width={48}
                height={56}
                className="w-12 h-14 object-contain hover-lift cursor-pointer" 
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-sky-500 rounded-lg opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-heading font-medium text-white hover:text-pink-300 transition-all duration-300 relative group text-shadow-soft">
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-sky-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a href="/admisiones" className="font-heading font-medium text-white hover:text-pink-300 transition-all duration-300 relative group text-shadow-soft">
              Admisiones
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-sky-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/eventos" className="font-heading font-medium text-white hover:text-sky-300 transition-all duration-300 relative group text-shadow-soft">
              Eventos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/documentos" className="font-heading font-medium text-white hover:text-pink-300 transition-all duration-300 relative group text-shadow-soft">
              Documentos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-sky-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <button className="relative group bg-gradient-to-r from-pink-600 to-sky-500 text-white px-6 py-2 rounded-full font-heading font-semibold hover-lift overflow-hidden shadow-lg">
              <span className="relative z-10">Contacto</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-700 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300 hover-lift text-shadow-soft"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </nav>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl p-6 border border-pink-500/20 shadow-2xl">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="font-heading font-semibold text-white hover:text-pink-300 py-3 px-4 rounded-xl hover:bg-pink-500/20 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <a 
                href="/admisiones" 
                className="font-heading font-semibold text-white hover:text-pink-300 py-3 px-4 rounded-xl hover:bg-pink-500/20 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Admisiones
              </a>
              <a 
                href="/eventos" 
                className="font-heading font-semibold text-white hover:text-sky-300 py-3 px-4 rounded-xl hover:bg-sky-500/20 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Eventos
              </a>
              <a 
                href="/documentos" 
                className="font-heading font-semibold text-white hover:text-pink-300 py-3 px-4 rounded-xl hover:bg-pink-500/20 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Documentos
              </a>
              <button 
                className="bg-gradient-to-r from-pink-600 to-sky-500 text-white px-6 py-3 rounded-xl font-heading font-semibold hover-lift hover:from-pink-700 hover:to-sky-600 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <title>Escuela María Auxiliadora</title>
        <meta name="description" content="Escuela de Educación Básica María Auxiliadora - Educar con el corazón para la vida desde 1943" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-body`}
        suppressHydrationWarning={true}
      >
        <DynamicHeader />
        
        {/* Main Content */}
        <main className="pt-20">
          {children}
        </main>
        
        {/* Footer Dinámico */}
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 mt-auto overflow-hidden">
          {/* Elementos de fondo animados */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-500/10 to-sky-500/10 rounded-full animate-pulse" />
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-sky-500/10 to-purple-500/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6 animate-fade-in-up">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-sky-500 rounded-lg flex items-center justify-center shadow-lg hover-lift">
                      <span className="text-white font-bold text-xl">✟</span>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-sky-500 rounded-lg blur opacity-30 animate-pulse" />
                  </div>
                  <div>
                    <h5 className="font-display text-2xl font-bold text-gradient">Escuela María Auxiliadora</h5>
                    <p className="font-body text-sm text-gray-400">Julio Andrade - Carchi</p>
                  </div>
                </div>
                <p className="text-gray-300 font-body leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  Educando estudiantes desde 1943. <span className="text-gradient font-semibold">&ldquo;Educar con el corazón para la vida&rdquo;</span> - Formación integral en valores cristianos y excelencia académica.
                </p>
                
                {/* Redes sociales */}
                <div className="flex space-x-4 mt-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <button className="w-10 h-10 bg-gradient-to-r from-pink-600 to-pink-700 rounded-full flex items-center justify-center hover-lift">
                    <span className="text-sm">📘</span>
                  </button>
                  <button className="w-10 h-10 bg-gradient-to-r from-sky-600 to-sky-700 rounded-full flex items-center justify-center hover-lift">
                    <span className="text-sm">📱</span>
                  </button>
                  <button className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center hover-lift">
                    <span className="text-sm">📧</span>
                  </button>
                </div>
              </div>
              
              <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <h6 className="font-heading text-xl font-bold mb-4 text-gradient">Enlaces Rápidos</h6>
                <div className="space-y-3">
                  <a href="/admisiones" className="block text-gray-300 hover:text-pink-400 transition-all duration-300 font-body hover:translate-x-2 hover:font-semibold">→ Admisiones</a>
                  <a href="/eventos" className="block text-gray-300 hover:text-sky-400 transition-all duration-300 font-body hover:translate-x-2 hover:font-semibold">→ Eventos</a>
                  <a href="/documentos" className="block text-gray-300 hover:text-pink-400 transition-all duration-300 font-body hover:translate-x-2 hover:font-semibold">→ Documentos</a>
                  <a href="#" className="block text-gray-300 hover:text-sky-400 transition-all duration-300 font-body hover:translate-x-2 hover:font-semibold">→ Portal de Padres</a>
                </div>
              </div>
              
              <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <h6 className="font-heading text-xl font-bold mb-4 text-gradient">Contacto</h6>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <span className="w-5 h-5 bg-gradient-to-r from-pink-500 to-sky-500 rounded-full flex items-center justify-center text-xs">📍</span>
                    <span className="font-body">Julio Andrade, Carchi, Ecuador</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <span className="w-5 h-5 bg-gradient-to-r from-pink-500 to-sky-500 rounded-full flex items-center justify-center text-xs">📞</span>
                    <span className="font-body">(593) 6-XXX-XXXX</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <span className="w-5 h-5 bg-gradient-to-r from-pink-500 to-sky-500 rounded-full flex items-center justify-center text-xs">✉</span>
                    <span className="font-body">info@mariaauxiliadora.edu.ec</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-12 pt-8 text-center animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-gray-400 font-body">
                  &copy; 2025 Escuela de Educación Básica &ldquo;María Auxiliadora&rdquo; - Todos los derechos reservados
                </p>
                <p className="text-sm text-gray-500 font-body">
                  Desarrollado con ❤️ para la educación
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

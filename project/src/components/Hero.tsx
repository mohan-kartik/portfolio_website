import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.1'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-24 text-center relative">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
          Kartik Mohan
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 mb-4">
          Data Science | Machine Learning
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Transforming complex data into actionable insights through innovative machine learning solutions
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/mohan-kartik"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohan-kartik"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:mohan.kar@northeastern.edu"
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://public.tableau.com/app/profile/kartik.mohan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <img 
              src="https://cdn.worldvectorlogo.com/logos/tableau-software.svg"
              alt="Tableau"
              className="w-6 h-6"
            />
          </a>
        </div>

        <a
          href="#about"
          className="animate-bounce absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Profile placeholder"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a Data Scientist and Machine Learning Engineer with extensive experience in developing
              automated solutions for risk analytics, ETL pipelines, and predictive modeling. My work
              spans across financial institutions where I've implemented data-driven solutions that
              have significantly improved efficiency and decision-making processes.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Currently working at Wilshire Associates, I specialize in Python development, data
              migration, and implementing automated solutions for risk monitoring and analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
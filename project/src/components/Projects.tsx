import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Time Series Forecasting',
      description: 'Analyzed over 2M rows of power consumption data and implemented various forecasting models including SARIMA, LSTM, Random Forest, and Linear Regression.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      technologies: ['Python', 'SARIMA', 'LSTM', 'Random Forest'],
      metrics: 'Achieved lowest MAPE of 18.7%'
    },
    {
      title: 'Music Genre Classification',
      description: 'Built a comprehensive music analysis system combining genre classification and recommendation features using machine learning.',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      technologies: ['XGBoost', 'Random Forest', 'CNN', 'KNN'],
      metrics: 'Achieved 93.33% classification accuracy'
    },
    {
      title: 'Risk Analytics Dashboard',
      description: 'Developed an automated risk monitoring system with real-time analytics and reporting capabilities.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      technologies: ['Python', 'Tableau', 'SQL', 'Azure'],
      metrics: 'Reduced monitoring time by 65%'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <p className="text-blue-600 font-medium text-sm mb-4">
                  {project.metrics}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between pt-4 border-t border-gray-100">
                  <a
                    href="#"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    <span>Code</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
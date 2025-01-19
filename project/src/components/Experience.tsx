import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Wilshire Associates',
      role: 'Associate Python Developer',
      duration: 'Dec 2023 – Present',
      location: 'New York City, US',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      achievements: [
        'Liaised with teams for vendor data migration and scripts deployment from Lyxor\'s legacy system to Azure infrastructure',
        'Coordinated vendor data migration and script deployment across Wilshire teams',
        'Participated in complete Software Development Life Cycle (SDLC)',
        'Collaborated with DevOps and IT teams to redesign configure CI/CD pipelines',
        'Delivered automated solution through Tableau and Python for breach limit monitoring of 450+ metrics'
      ]
    },
    {
      company: 'Amundi US (Lyxor Asset Management)',
      role: 'Market Risk Analyst',
      duration: 'Sep 2023 – Dec 2023',
      location: 'New York City, US',
      logo: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      achievements: [
        'Implemented 15+ scripts using Python, SQL, and Tableau to automate workflows',
        'Performed monthly data loads on risk management platform',
        'Boosted efficiency by 62% through automation and documentation'
      ]
    },
    {
      company: 'Amundi US',
      role: 'Data Science Intern',
      duration: 'May 2023 – Aug 2023',
      location: 'New York City, US',
      logo: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      achievements: [
        'Designed ETL pipeline to ingest, transform and load data in PostgreSQL for analysis of Leverage across asset classes',
        'Developed advanced analytics and validation checks on data and statistical model, ensuring integrity',
        'Streamlined Exposure Summary and Portfolio Analysis through Tableau migration, optimizing performance by 30%'
      ]
    },
    {
      company: 'Amundi US',
      role: 'Investment Risk Analyst Coop',
      duration: 'Aug 2022 – Dec 2022',
      location: 'New York City, US',
      logo: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      achievements: [
        'Automated delivery and management of 200+ files daily, reducing manual work by 2+ hrs/day',
        'Conducted ETL on 60 M+ rows in PostgreSQL to identify KPIs for P&L reporting',
        'Applied Statistical models to generate Stress Tests and wrote Python script to extract and load data',
        'Formulated a reporting tool in Python to perform Data Quality Assessments saving 10 hours/week',
        'Collaborated with cross-functional team and stakeholders to evaluate business needs'
      ]
    },
    {
      company: 'LNM IIT',
      role: 'Data Scientist',
      duration: 'May 2020 – July 2021',
      location: 'India',
      logo: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      achievements: [
        'Extracted and pre-processed 500K+ COVID-19 cases data and visualized with Plotly',
        'Applied Naive Bayes and Bi-LSTM models for Sentiment Analysis with 84% accuracy',
        'Implemented EfficientNet model for COVID-19 detection achieving 92% accuracy',
        'Deployed Dash webapp for real-time analyses of 190+ countries COVID-19 metrics'
      ]
    },
    {
      company: 'Tata Consultancy Services',
      role: 'Data Analyst Intern',
      duration: 'June 2019 – Aug 2019',
      location: 'India',
      logo: 'https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      achievements: [
        'Configured and maintained MS SQL database improving efficiency by 40%',
        'Integrated front-end admin portal with AWS RDS for secure data storage',
        'Deployed Tableau dashboards increasing data visibility by 25%'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Work Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-blue-200"
            >
              <div className="absolute -left-6 top-0">
                <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{exp.company}</h3>
                    <p className="text-lg text-gray-600">{exp.role}</p>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-500 mt-1">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
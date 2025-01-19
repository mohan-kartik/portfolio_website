import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      skills: ['Python', 'JavaScript', 'SQL', 'R'],
      color: 'blue'
    },
    {
      title: 'Libraries & Frameworks',
      skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'pandas', 'NumPy'],
      color: 'green'
    },
    {
      title: 'Machine Learning',
      skills: ['Deep Learning', 'NLP', 'Computer Vision', 'Time Series Analysis'],
      color: 'purple'
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'AWS', 'Azure', 'Tableau'],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 rounded-full ${getColorClasses(
                      category.color
                    )}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
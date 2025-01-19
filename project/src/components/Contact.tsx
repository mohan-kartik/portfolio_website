import React from 'react';
import { Mail, Github, Linkedin, FileDown } from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:mohan.kar@northeastern.edu',
      value: 'mohan.kar@northeastern.edu'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mohan-kartik',
      value: 'linkedin.com/in/mohan-kartik'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/mohan-kartik',
      value: 'github.com/mohan-kartik'
    },
    {
      icon: FileDown,
      label: 'Resume',
      href: '/resume.pdf',
      value: 'Download PDF'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <contact.icon className="w-8 h-8 text-blue-500 mr-4 flex-shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-lg font-medium text-gray-800 truncate">
                    {contact.label}
                  </h3>
                  <p className="text-gray-600 truncate">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
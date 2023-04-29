import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-purple-300 to-blue-500 min-h-screen px-4 py-6 sm:px-8">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in touch</h1>
        <div className="bg-white p-6 sm:p-8 md:p-12 rounded-lg shadow-lg">
          <p className="text-gray-800 mb-4">
            If you have any questions or would like to discuss a project, feel free to contact me using the form below.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
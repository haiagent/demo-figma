import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-white">Contact Me</h1>
        <div className="bg-white rounded-lg p-8 shadow-md">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="sr-only">Name</label>
              <input type="text" id="name" name="name" placeholder="Name" className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" id="email" name="email" placeholder="Email" className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Message" className="w-full py-2 px-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500" />
            </div>
            <button type="submit" className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
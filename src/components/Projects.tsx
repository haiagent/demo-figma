```tsx
import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'https://via.placeholder.com/150',
    },
    {
      title: 'Project 2',
      description: 'Vivamus laoreet consequat odio, et bibendum sapien.',
      img: 'https://via.placeholder.com/150',
    },
    {
      title: 'Project 3',
      description: 'Donec cursus ex ac quam blandit, quis rhoncus mauris interdum.',
      img: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <section className="px-4 py-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-white font-serif">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projectList.map((project) => (
            <div key={project.title} className="bg-white border-2 border-purple-200 shadow-md mx-auto w-full p-6 rounded-lg hover:shadow-xl transition-all duration-300">
              <img src={project.img} alt={project.title} className="h-40 w-full object-cover object-center mb-4 rounded-lg" />
              <h3 className="font-bold text-xl">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
```
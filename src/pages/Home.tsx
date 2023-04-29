```tsx
import React from 'react';

import Header from '../components/Header';
import Introduction from '../components/Introduction';
import Projects from '../components/Projects';
import Contact from '../pages/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-400 to-green-400">
      <Header />
      <Introduction />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
```
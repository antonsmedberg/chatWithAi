import React from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="container mx-auto px-4 bg-gray-50">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;

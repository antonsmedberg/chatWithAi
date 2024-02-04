import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-6 bg-blue-800 text-white">
      <div className="text-left">
        <h1 className="text-3xl font-bold">ChatAI Master</h1>
        <p className="text-sm font-light">The Ultimate AI Conversation Experience</p>
      </div>
      <nav>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
          Chat Interface
        </button>
        <button className="ml-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          Dataset Tools
        </button>
      </nav>
    </header>
  );
};

export default Header;

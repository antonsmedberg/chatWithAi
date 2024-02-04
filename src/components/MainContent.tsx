import React from 'react';

const MainContent: React.FC = () => {
  return (
    <main className="mt-10">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">AI-Powered Chat Generation</h2>
        <p className="text-gray-600 mb-4">
          Leverage AI to simulate realistic conversations. Generate datasets with structures reflecting true user interactions to enhance your AI's learning process.
        </p>
        {/* Text area for code display */}
        <div className="bg-gray-900 text-white p-6 rounded-lg font-mono text-sm overflow-auto">
          {/* Placeholder for dynamic Python code display */}
          <p>import chat_ai</p>
          <p>chat_ai.generate_conversation()</p>
          <p># ... additional generated conversation ...</p>
        </div>
      </div>
    </main>
  );
};

export default MainContent;



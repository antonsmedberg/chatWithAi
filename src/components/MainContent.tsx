import React from 'react';

const MainContent: React.FC = () => {
  return (
    <main className="mt-10 bg-gradient-to-b from-blue-100 to-blue-200 p-4 rounded-lg shadow-md">
      <div className="container mx-auto">
        <section className="p-8 bg-white rounded-lg">
          <h2 className="text-3xl font-bold mb-6">AI-Powered Chat Generation</h2>
          <p className="text-gray-800 mb-4">
            Leverage AI to simulate realistic conversations. Generate datasets with structures reflecting true user interactions to enhance your AI's learning process.
          </p>
          {/* Add more content and styling here */}
        </section>
      </div>
    </main>
  );
};

export default MainContent;

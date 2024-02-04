import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 py-6 bg-blue-900 text-white">
      <div className="flex justify-between items-center">
        <div>
          <a href="#" className="hover:text-blue-300 transition duration-300">Feedback</a>
          <span className="mx-3">|</span>
          <a href="#" className="hover:text-blue-300 transition duration-300">Report Issue</a>
        </div>
        <div>
          <a href="#" className="hover:text-blue-300 transition duration-300">My Profile</a>
          <span className="mx-3">|</span>
          <a href="#" className="hover:text-blue-300 transition duration-300">API Access</a>
        </div>
        <div>
          <a href="#" className="hover:text-blue-300 transition duration-300">Terms of Use</a>
          <span className="mx-3">|</span>
          <a href="#" className="hover:text-blue-300 transition duration-300">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


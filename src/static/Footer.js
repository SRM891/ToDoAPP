import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full opacity-0 transition-opacity hover:opacity-100">
      <footer className="text-center bg-gray-200 p-5">
        <p>&copy; {new Date().getFullYear()} To-Do App.</p>
      </footer>
    </div>
  );
};

export default Footer;

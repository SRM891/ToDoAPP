import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-screen text-center bg-gray-200 p-5">
      <p>&copy; {new Date().getFullYear()} To-Do App.</p>
    </footer>
  );
};

export default Footer;

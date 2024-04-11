import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="relative">
        <Link
          className="absolute right-4 bottom-0 bg-gradient-to-br from-green-400 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200 rounded-2xl p-3 text-sm font-thin font-serif text-center text-white"
          to="/add-todo"
        >
          Add To-Do
        </Link>
        <Link
          className="absolute left-4 bottom-0 text-sm font-thin font-serif p-3 rounded-2xl text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-pink-200 text-center"
          to="/todolist"
        >
          To-Do List
        </Link>
      </nav>
    </header>
  );
};
//
export default Header;

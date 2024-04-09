import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="relative w-screen">
        <h1 className="text-center text-5xl text-slate-700 font-bold">
          To-Do APP
        </h1>
        <Link
          className="fixed right-10 top-2 mt-4 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 rounded-2xl p-3 text-sm font-bold text-center text-white"
          to="/add-todo"
        >
          Add To-Do
        </Link>
        <Link
          className="fixed left-4 top-2 text-sm font-bold p-3 rounded-2xl mt-4 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 text-center"
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

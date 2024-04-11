import React, { useState } from "react";
import Header from "../static/Header";
import Footer from "../static/Footer";

const ToDoForm = ({ addTodo, welcome }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task, description);
    setTask("");
    setDescription("");
  };
  return (
    <>
    <Header />
    <div className="text-center">
        <h6 className="my-5 font-serif font-thin text-3xl bg-gradient-to-r from-pink-600 via-green-400 to-indigo-500 inline-block text-transparent bg-clip-text">So {welcome.toLowerCase()}, What are the tasks for today?</h6>
      <form onSubmit={handleSubmit}>
        <input
          className="mx-0.5 border-2 border-green-300 hover:border-green-500 text-gray-300 text-sm rounded-lg focus:border-blue-500 w-1/7 p-3 bg-gray-700 placeholder-gray-300"
          placeholder="Title"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <input
          className="mx-0.5 border-2 border-green-300 hover:border-green-500 text-gray-300 text-sm rounded-lg focus:border-blue-500 w-1/2 p-3 bg-gray-700 placeholder-gray-300"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <div>
          <button
            className="self-center bg-gradient-to-r from-cyan-400 to-blue-700 hover:form-cyan-500 hover:to-blue-800 text-white font-bold py-3 px-9 rounded-full m-8 focus:from-blue-700"
            type="submit"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default ToDoForm;

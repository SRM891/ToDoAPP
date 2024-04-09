import React, { useState } from "react";

const ToDoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task, description);
    setTask("");
    setDescription("");
  };
  return (
    <div className="text-center">
      <form onSubmit={handleSubmit}>
        <h6 className="m-5 text-4xl font-sans text-gray-300">Add To-do</h6>
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
  );
};

export default ToDoForm;

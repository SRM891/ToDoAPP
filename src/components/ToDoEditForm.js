import React, { useState } from "react";

const ToDoEditForm = ({ todo, onSave, onCancel }) => {
  const [updatedTodo, setUpdatedTodo] = useState(todo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTodo({
      ...updatedTodo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(updatedTodo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="mx-0.5 border-2 border-green-300 hover:border-green-500 text-gray-300 text-sm rounded-lg focus:border-blue-500 w-1/4 p-3 bg-gray-700 placeholder-gray-300"
          name="title"
          placeholder="Title"
          value={updatedTodo.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="text-break mx-0.5 border-2 border-green-300 hover:border-green-500 text-gray-300 text-sm rounded-lg focus:border-blue-500 w-2/3 p-3 bg-gray-700 placeholder-gray-300"
          name="desc"
          value={updatedTodo.desc}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="self-center bg-gradient-to-r from-cyan-400 to-blue-700 hover:form-cyan-500 hover:to-blue-800 text-white font-bold font-mono py-1 px-6 rounded-full m-2 focus:from-blue-700"
        >
          Save
        </button>
        <button
          type="button"
          className="self-center bg-gradient-to-r from-cyan-400 to-blue-700 hover:form-cyan-500 hover:to-blue-800 text-white font-bold font-mono py-1 px-4 rounded-full m-2 focus:from-blue-700"
          onClick={onCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ToDoEditForm;

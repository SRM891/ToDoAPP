import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import ToDoEditForm from "./ToDoEditForm";

const ToDoApp = ({ task, onDelete, onEdit }) => {
  const deleteTodo = (id) => {
    onDelete(id);
  };

  const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
  };

  const handleSaveEdit = (index, updatedTodo) => {
    onEdit(index, updatedTodo);
    setEditIndex(null);
  };
  return (
    <div className="h-full">
      <h1 className="text-center m-2 text-4xl text-gray-300 font-thin">
        List of To-Do's
      </h1>
      <ul className="relative text-center w-2/3 mb-14">
        {task.map((todo, index) => (
          <div className="break-words flex-col relative left-1/4 py-2 bg-gray-200 border-8 rounded-3xl border-gray-500 my-2">
            {editIndex === index ? (
              <ToDoEditForm
                key={index}
                todo={todo}
                onSave={(updatedTodo) => handleSaveEdit(index, updatedTodo)}
                onCancel={handleCancelEdit}
              />
            ) : (
              <>
                <li
                  className="font-bold font-sans text-xl text-gray-700 list-outside mx-9"
                  key={index}
                >
                  {todo.title}
                </li>

                <span className="text-gray-500 font-semibold font-serif">
                  Description:
                  {
                    <p
                      className="font-light font-mono my-3 mx-12 text-gray-500"
                      key={index}
                    >
                      {todo.desc}
                    </p>
                  }
                </span>
                <button
                  className="absolute top-4 left-4 text-blue-700"
                  type="button"
                  onClick={() => handleEdit(index)}
                >
                  <FontAwesomeIcon className="" icon={faEdit} />
                </button>
                <button
                  className="absolute top-4 right-4 text-red-600"
                  type="button"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <FontAwesomeIcon className="" icon={faTrash} />
                </button>
              </>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;

import ToDoApp from "./ToDoApp";
import ToDoForm from "./ToDoForm";
import ToDoSignUp from "./ToDoSignUp";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const ToDoWrapper = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [idnum, setIdNum] = useState(0);
  const addTodo = (newtodo, description) => {
    setTodos([...todos, { title: newtodo, desc: description, id: idnum + 1 }]);
    setIdNum((prevId) => prevId + 1);
    navigate("/todolist");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (index, updatedTodo) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedTodo;
    setTodos(updatedTodos);
  };
  const [userName, setUserName] = useState();
  const signUpData = (user) => {
    setUserName(user.firstName);
}
  return (
    <div>
      <Routes>
        <Route path="/add-todo" element={<ToDoForm addTodo={addTodo} welcome={userName} />} />
        <Route
          path="/todolist"
          element={
            <ToDoApp task={todos} onDelete={deleteTodo} onEdit={editTodo} />
          }
        />
        <Route path="/" element={<ToDoSignUp signUpData={signUpData} />} />
      </Routes>
    </div>
  );
};

export default ToDoWrapper;

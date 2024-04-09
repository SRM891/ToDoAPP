import ToDoApp from "./ToDoApp";
import ToDoForm from "./ToDoForm";
import { useState } from "react";
import {Route, Routes, useNavigate } from "react-router-dom";

const ToDoWrapper = () => {
    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);
    const [idnum, setIdNum] = useState(0);
    const addTodo = (newtodo, description) => {
      setTodos([...todos, {title:newtodo, desc: description, id:idnum + 1}]);
      setIdNum(prevId=>prevId+1);
      navigate("/todolist");
    };
  
    const deleteTodo = (id)=>{
      setTodos(todos.filter((todo)=>todo.id!==id));
    }
  
    const editTodo = (index, updatedTodo) => {
      const updatedTodos = [...todos];
      updatedTodos[index] = updatedTodo;
      setTodos(updatedTodos);
    };
  return (
    <div>
      <Routes>
        <Route path="/add-todo" element={<ToDoForm addTodo={addTodo} />} />
        <Route path="/todolist" element={<ToDoApp task={todos} onDelete={deleteTodo} onEdit={editTodo}/>} />
      </Routes>
    </div>
  );
};

export default ToDoWrapper;

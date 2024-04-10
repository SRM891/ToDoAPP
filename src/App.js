import "./App.css";
import ToDoWrapper from "./components/ToDoWrapper";

function App() {
  return (
    <div
      className="bg-gray-400 relative min-h-dvh h-dvh overflow-auto
    "
    >
      <h1 className="text-center text-5xl text-slate-700 font-bold mb-5">
        Welcome to To-Do APP
      </h1>
      <ToDoWrapper />
    </div>
  );
}

export default App;

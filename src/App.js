import "./App.css";
import ToDoWrapper from "./components/ToDoWrapper";

function App() {
  return (
    <div
      className="bg-gradient-to-br from-purple-500 via-yellow-200 to-orange-400 relative h-dvh overflow-auto
    "
    >
      <h1 className="text-center text-xl font-serif text-white font-bold mb-5">
        To-Do APP
      </h1>
      <ToDoWrapper />
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./static/Header";
import Footer from "./static/Footer";
import ToDoWrapper from "./components/ToDoWrapper";

function App() {
 
  return (
    <div className="bg-gray-400 relative w-full min-h-dvh h-dvh overflow-auto
    ">
      <Header />
      <ToDoWrapper />
      <Footer />
    </div>
  );
}

export default App;

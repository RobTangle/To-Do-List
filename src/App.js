import { Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import ToDoList from "./components/ToDoList";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="App">
        <h1>To Do List</h1>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Home} />
        <Route path="/toDo" component={ToDoList} />
        {/* <ToDoList /> */}
      </div>
    </>
  );
}

export default App;

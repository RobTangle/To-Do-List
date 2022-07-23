import { Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import ToDoList from "./components/ToDoList";
import Erased from "./components/Home";

function App() {
  return (
    <>
      <div className="App">
        <h1>To Do List</h1>
        <Route path="/" component={NavBar} />
        <Route exact path="/erased" component={Erased} />
        <Route exact path="/" component={ToDoList} />
        {/* <ToDoList /> */}
      </div>
    </>
  );
}

export default App;

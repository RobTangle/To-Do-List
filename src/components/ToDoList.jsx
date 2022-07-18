import React, { useState } from "react";
import "./ToDoList.css";
import Pending from "./Pending";

export default function ToDoList() {
  const [temp, setTemp] = useState("");
  const [pending, setPending] = useState([]);
  const [done, setDone] = useState([]);

  return (
    <>
      <div>
        <h3>To Do List Input</h3>
        <div className="addToDo">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!temp) {
                return alert("Ingrese una tarea");
              }
              setPending([...pending, temp]);
              setTemp("");
            }}
          >
            <label htmlFor="">Add task: </label>
            <input
              type="text"
              placeholder="Task to do"
              value={temp}
              onChange={(e) => setTemp(e.target.value)}
            />
            <button type="submit">Add to List</button>
          </form>
        </div>
        {/* /////////// */}
        <div className="listas">
          <div>
            <Pending props={pending} />
          </div>
          <div>Done</div>
        </div>
      </div>
    </>
  );
}

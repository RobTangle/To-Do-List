import React, { useState } from "react";
import "./ToDoList.css";
import Pending from "./Pending";

export default function ToDoList() {
  const [temp, setTemp] = useState("");
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
              setDone([...done, temp]);
              setTemp("");
            }}
          >
            <label htmlFor="">Add task</label>
            <input
              type="text"
              placeholder="Task to do"
              value={temp}
              onChange={(e) => setTemp(e.target.value)}
            />
            <button type="submit">Agregar task</button>
          </form>
        </div>
        {/* /////////// */}
        <div className="listas">
          <div>
            <Pending props={done} />
          </div>
          <div>Done</div>
        </div>
      </div>
    </>
  );
}

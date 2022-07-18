import React, { useState } from "react";
import AddToDo from "./AddToDo";
import "./ToDoList.css";
import Pending from "./Pending";

export default function ToDoList() {
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
              setDone([...done, pending]);
              setPending("");
              // setPending([]);
            }}
          >
            <label htmlFor="">Add task</label>
            <input
              type="text"
              placeholder="Task to do"
              value={pending}
              onChange={(e) => setPending(e.target.value)}
            />
            <button type="submit">Agregar task</button>
          </form>
        </div>
        {/* /////////// */}
        <div className="pending">
          <Pending props={done} />
        </div>
        <div className="done">Done</div>
      </div>
    </>
  );
}

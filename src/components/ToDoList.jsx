import React, { useState } from "react";
import "./ToDoList.css";
import Pending from "./Pending";
import Elemento from "./Elemento";

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
              placeholder="Task to do..."
              value={temp}
              onChange={(e) => setTemp(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
        </div>
        {/* /////////// */}
        <div className="listas">
          <div>
            Pending:
            <Pending
              key={Math.random().toFixed(6)}
              setPending={setPending}
              pending={pending}
              setDone={setDone}
              done={done}
            />
          </div>
          <div>
            Done: <br />
            {/* <Pending pending={done} /> */}
            <Elemento done={done} />
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { GrAdd } from "react-icons/gr";

function TaskInput() {
  return (
    <>
      <input className="TaskInput" type="text" required />
      <button id="boton">
        <GrAdd />
      </button>
    </>
  );
}

export default TaskInput;
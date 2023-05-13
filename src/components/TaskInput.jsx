import { GrAdd } from "react-icons/gr";
import { useState } from "react";
import { v4 as generateID } from "uuid";

function TaskInput({tasks, setTasks}) {
  const [input, setInput]= useState('');

  function addTask() {

    if (!input) {

      alert("ERROR: No hay nada que agregar.");
    
    } else {

      const newTask = {
        id: generateID(),
        text: input,
        isDone: false
      }

      setTasks(oldList => [newTask, ...oldList]);
      setInput('');
      console.log(tasks);
    }
  }

  return (
    <>
      <input
        placeholder="Agregar una tarea"
        className="TaskInput"
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button id="boton" onClick={() => {addTask()}}>
        <GrAdd />
      </button>
    </>
  );
}

export default TaskInput;
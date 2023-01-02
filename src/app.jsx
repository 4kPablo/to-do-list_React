import { GrAdd } from "react-icons/gr";
import { IoMdSquareOutline } from "react-icons/io";
import { IoMdCheckboxOutline } from "react-icons/io";

function ToDoList() {
  return (
    <div className="ToDoList">
      <h1>To do list</h1>
      <div className="TaskInput-container">
        <TaskInput />
        <AddButton />
      </div>

      <ul className="TaskList">
        <TaskItem content="Desayunar" />
        <TaskItem content="Limpiar la ropa" />
        <TaskItem content="Estudiar" />
      </ul>
    </div>
  );
}

// Tachador de tareas
window.onclick = (e) => {
  if (e.target.classList.contains("task")) {
    let targetTask = document.getElementById(e.target.id);
    targetTask.classList.toggle("done");
    console.log("TargetTask: ", targetTask);

    // let targetCheckbox = targetTask.childNodes;
    // targetCheckbox.classList.toggle("hidden");
    console.log("targetTask.childNodes: ", targetTask.childNodes);
  }
};

function TaskInput() {
  return <input className="TaskInput" type="text" required />;
}

function AddButton() {
  return (
    <button id="boton">
      <GrAdd />
    </button>
  );
}

function TaskItem(props) {
  return (
    <li id={props.content} className="task taskTitle">
      {props.content}
      {<IoMdSquareOutline className="task taskCheckbox" />}
      {<IoMdCheckboxOutline className="task taskCheckbox hidden"/>}
    </li>
  );
}

export default ToDoList;

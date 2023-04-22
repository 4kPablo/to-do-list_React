import { IoMdSquareOutline } from "react-icons/io";
import { IoMdCheckboxOutline } from "react-icons/io";
import TaskInput from "./TaskInput";

function ToDoList() {
  return (
    <div className="ToDoList">
      <h1>To do list</h1>

      <div className="TaskInput-container">
        <TaskInput />
      </div>

      <ul className="TaskList">
        <Task content="Desayunar" isDone={true} clickHandler={clickHandler} />
        <Task content="Limpiar la ropa" isDone={false} clickHandler={clickHandler} />
        <Task content="Estudiar" isDone={false} clickHandler={clickHandler} />
      </ul>
    </div>
  );
}



function Task({ content, clickHandler, isDone }) {
  return (
    <div className={ isDone ? 'task done' : 'task'} onClick={clickHandler}>
      {content}
      {<IoMdSquareOutline className={ isDone ? 'taskCheckbox done hidden' : 'taskCheckbox'} />}
      {<IoMdCheckboxOutline className={ isDone ? 'taskCheckbox done' : 'taskCheckbox hidden'} />}
    </div>
  );
}

const clickHandler = () => {
  window.onclick = (e) => {
    e.target.classList.toggle("done");
    e.target.childNodes[1].classList.toggle("hidden");
    e.target.childNodes[2].classList.toggle("hidden");
  };
};

export default ToDoList;

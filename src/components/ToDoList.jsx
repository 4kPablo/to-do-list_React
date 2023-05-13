import { IoMdSquareOutline as NonCheckedBox } from "react-icons/io";
import { IoMdCheckboxOutline as CheckedBox } from "react-icons/io";
import { useState } from "react";
// import CloseBtn from "./CloseBtn";
import { IoIosClose as CloseBtn } from "react-icons/io";
import TaskInput from "./TaskInput";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  function Task({ id, text, isDone, completeTask, handleMouseOver, handleMouseOut }) {
    
    return (
      <li
        className={ isDone ? "task done" : "task"}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        >

        {text}

        <NonCheckedBox
          className={ isDone ? "checkbox done hidden" : "checkbox"} onClick={() => completeTask(id)}
        />

        <CheckedBox
          className={ isDone ? "checkbox done" : "checkbox hidden"} onClick={() => completeTask(id)}
        />

        {isHovering && <CloseBtn className="CloseBtn" onClick={() => deleteTask(id)} />} {/* Si isHovering es true, mostrar <CloseBtn/> */}

      </li>
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const completeTask = (id) =>  {
    setTasks(tasks.map(task => {
      if (task.id === id) {task.isDone = !task.isDone}
      return task;
    }))
  }

  const handleMouseOver = () => {
    setIsHovering(true);
  }

  const handleMouseOut = () => {
    setIsHovering(false);
  }

  return (
    <div className="ToDoList">
      <h1>To do list</h1>

      <div className="TaskInput-container">
        <TaskInput tasks={tasks} setTasks={setTasks}/>
      </div>

      <ul className="TaskList">
        {tasks.map((task) => {
          return (
            <Task
              id={task.id}
              key={task.id}
              text={task.text}
              isDone={task.isDone}
              completeTask={completeTask}
              handleMouseOver={handleMouseOver}
              handleMouseOut={handleMouseOut}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default ToDoList;
import './App.css';
import React, { useState } from "react";
import TaskList from "./Components/TaskList/TaskList"
import { tasks } from "./data"
import Add from './Components/Add/Add';
function App() {
  //console.log(tasks);
  const addTask = (x) => {
    setTaskm([...taskm, x])
  }
  const changeStats = (ids) => {
    setTaskm(taskm.map((el) => el.id == ids ? { ...el, isDone: !el.isDone } : el))
  }
  const supTask = (idsp) => {
    setTaskm(taskm.filter((el) => el.id !== idsp))
  }
  const EditTask = (idEdit, descEdit) => {
    setTaskm(taskm.map(el => el.id == idEdit ? { ...el, desc: descEdit } : el))
  }
  const [taskm, setTaskm] = useState(tasks)
  return (
    <div className="App">
      <Add addTask={addTask} />
      <TaskList EditTask={EditTask} list={taskm} changeStats={changeStats} supTask={supTask} />

    </div>

  );
}

export default App;
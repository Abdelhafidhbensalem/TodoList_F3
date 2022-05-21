import React, { useState } from 'react'
import SingleTask from '../SingleTask/SingleTask'

const TaskList = ({ list, changeStats, supTask, EditTask }) => {
  const [toggle, setToggle] = useState("All")

  return (
    <div>
      <h1>TaskList</h1>
      <button onClick={() => setToggle("completed")}>completed</button>
      <button onClick={() => setToggle("Uncompleted")}>Uncompleted</button>
      <button onClick={() => setToggle("All")}>all</button>
      {toggle == "All" ? list.map((el, i) => <SingleTask elp={el} nbr={i} changeStats={changeStats} supTask={changeStats} EditTask={EditTask} />) : toggle == "completed" ? list.filter(el => el.isDone).map((el, i) => <SingleTask elp={el} nbr={i} changeStats={changeStats} supTask={changeStats} EditTask={EditTask} />) : list.filter(el => !el.isDone).map((el, i) => <SingleTask elp={el} nbr={i} changeStats={changeStats} supTask={changeStats} EditTask={EditTask} />)}
    </div>

  )
}

export default TaskList
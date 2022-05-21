import React, { useState } from 'react'
import './SingleTask.css'

const SingleTask = ({ elp, nbr, changeStats, supTask ,EditTask}) => {
  const [edit, setEdit] = useState(false)
  const [descEdit, setDescEdit] = useState(elp.desc)
const handleClick=()=>{
  setEdit(!edit)
  if(edit)
{  EditTask(elp.id,descEdit)
}}

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {edit ? <input type="text" value={descEdit}  onChange={(e)=>setDescEdit(e.target.value)}/> : <h3 className={elp.isDone ? 'Green' : 'Red'} style={{ margin: 0 }}> {nbr} -{elp.desc}</h3>}
      <div>
        <button onClick={() => { supTask(elp.id) }} >X</button>
        <button onClick={() => { changeStats(elp.id) }} >{elp.isDone ? 'Done' : 'Undone'}</button>
        <button onClick={handleClick } >{edit ? "Save" : "Edit"}</button>
      </div>


    </div>
  )
}

export default SingleTask
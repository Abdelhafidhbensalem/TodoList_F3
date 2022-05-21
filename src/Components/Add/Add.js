import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';


const Add = ({addTask}) => {
const [newDesk, setNewDesk] = useState("")
const handleClick = (e)=>{
  e.preventDefault();
  addTask({id:uuidv4() , desc: newDesk, isDone: false});
  setNewDesk("")
}
  return (
    
    <div>
      <form onSubmit={(e)=>handleClick(e)}>
        <input type="Text" value={newDesk}  onChange={(e) => {setNewDesk(e.target.value)}} />
        <button >+</button>
        </form>
    </div>
  )
}

export default Add
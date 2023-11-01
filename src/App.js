import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [inputValue , setInputValue] = useState('')
const [TodoData,setTodoData] = useState([])


  const add = ()=>{
    if(!inputValue){
      alert("enter data")
    }else{
setTodoData((pre)=>[...pre,inputValue])
setInputValue('')
}
  }
  const inputFun = (e)=>{
    setInputValue(e.target.value)
  }
const edit = (i)=>{
  let user = prompt("Enter New Data",TodoData[i])
  TodoData[i] = user
  setTodoData((pre)=>[...pre])
}
const del = (index)=>{
  let a = TodoData.filter((e,i)=>i!==index)
setTodoData(a)
}
  return (
    <div className="App">
      <div className='inpBtnMain'>
      <h1>Todo List App</h1>

    <input type='text' value={inputValue} onChange={inputFun}></input>
    <button onClick={add}>Add</button>
    </div>
    <ul>
      {
TodoData.map((e,i)=><li key={i}>{e}<button className='btn' onClick={()=>edit(i)}>Edit</button><button className='btns' onClick={()=>del(i)}>Delete</button></li>)
      }
    </ul>
    </div>
  );
}

export default App;

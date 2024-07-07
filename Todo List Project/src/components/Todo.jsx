import { useState } from "react"

const Todo = () => {

    const[Todo,setTodo] = useState([])
    const[Input,setInput] = useState("")
    

    const changeHandler = (e) => {
        setInput(e.target.value);
      };

    const submitHandler = () => {
        if (Input.trim()) {
          setTodo([...Todo, Input]);
          setInput("");
        }
      };
    const deleteHandler = (e) =>{
        const newTodo = [...Todo]
        newTodo.splice(e.target.key,1);
        setTodo(newTodo)
    }  

  return (
    <div className="container">
        <h1>TodoList Project</h1>
    <section>
        <input value={Input} placeholder="New Todo" onChange={changeHandler}/>
        <button className="submit" onClick={submitHandler}>Submit</button>
    </section>
    <ul>
        {Todo.map((todo, index) => (
          <li key={index}> {todo} <button className="TodoDelete" key={index} onClick={deleteHandler}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
        </svg></button></li>
        ))}
    </ul>
    </div>
  )
}
export default Todo
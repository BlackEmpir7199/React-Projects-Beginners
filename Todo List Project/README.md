# TodoList Project 🚀

Welcome to the **TodoList Project**! This project is a sleek, modern to-do list application built with React. It features a minimalistic design with a dark theme, intuitive interface, and essential functionalities to manage your daily tasks.

## Features ✨

- Add new tasks effortlessly
- Delete tasks with a single click
- Clean and modern user interface
- Responsive design

## Demo 📸

Check out the demo Image:
![image](https://github.com/BlackEmpir7199/React-Projects-Beginners/assets/118678415/120fa30a-0b25-4d5f-bd6b-925f365dee00)


## Getting Started 🛠️

Follow these instructions to set up the project on your local machine.

### Prerequisites

- Node.js and npm installed
- Basic knowledge of JavaScript and React

### Installation

1. **Install dependencies**

   ```bash
   npm install vite@latest
   ```

2. **Run the app**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) to view it in the browser.


## Understanding the Code 🧠

### App Component

The `App.js` file is the root component of our application.

```jsx
import Todo from "./components/Todo"
function App() {
  return (
        <Todo/>
  )
}

export default App
```

### Todo Component

The `Todo.js` file manages the list of to-do items.

```jsx
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
```

### Styling 🖌️

Add some basic styles to make it look as good as in the screenshot. You can add the following CSS in your `App.css`:

```css
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1{
  text-align: center;
  font-family: cursive;
  color: aliceblue;

}
body{
  background-color: rgb(18, 18, 18);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container{
  background-color: rgb(26, 26, 26);
  padding: 50px;
  box-shadow: 2px 2px 8px cyan;
  border-radius: 8px; 
}

input{
  padding: 15px;
  border: 1px solid cyan;
  border-radius: 8px;
  background-color: transparent;
  color:azure;
  outline: none;
  font-size: 16px;
  width: 300px;
  font-family: cursive;
}

section{
  padding: 20px;
  margin: 10px;
}

button{
  border-radius: 100px;
  background-color: cyan;
  padding: 5px;
  border: none;
  outline: none;
  color :black;
  font-size: 15px;
  font-family: cursive;
  font-weight: 600;
  padding: 10px 20px;
  margin-left: 20px;
  cursor:pointer;
}


li{
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:rgb(55, 55, 55) ;
  color: azure;
  border-radius: 8px;
  padding: 7px 20px;
  margin:10px;
  font-family: cursive;
  font-size: 16px;
}

.TodoDelete{
  border-radius: 8px;
  background-color: #454545;
  padding: 5px;
  border: 1px solid cyan;
  outline: none;
  color :white;
  padding: 10px 20px;
  cursor:pointer;
  transition: color 1s,border 1.1s, background-color 1s;

}

.TodoDelete:hover{
  color:black;
  background-color: cyan;
}
```

## Learn More 📚

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [useState Hook](https://reactjs.org/docs/hooks-state.html)
- [CSS Styling](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Contributing 🤝

Contributions are welcome! Feel free to open issues or submit pull requests.

---

Enjoy coding! 🎉

Made with ❤️ by **Rakhul👩‍💻**

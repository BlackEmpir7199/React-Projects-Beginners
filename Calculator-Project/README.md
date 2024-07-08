# 🧮 Calculator Project

Welcome to the **Calculator Project**! This simple yet stylish calculator application is built using React and Vite. It features a modern, responsive design with intuitive user interactions, making it a perfect starter project for those learning React and front-end development.

## Features ✨

- Basic arithmetic operations: addition, subtraction, multiplication, division
- Clear button to reset the input
- Responsive and sleek UI
- Error handling for invalid expressions
- Interactive hover effects for buttons

## Demo 📸

Check out the demo Image:

## Getting Started 🛠️

Follow these instructions to set up the project on your local machine.

### Prerequisites

- Node.js and npm installed
- Basic knowledge of JavaScript and React

### Installation

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the app**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Project Structure 📂

Here's an overview of the project structure:

```
calculator-project/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   └── Calculator.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
└── package.json
```

## Understanding the Code 🧠

### Calculator Component

The `Calculator.jsx` file is the heart of the application, managing the state and UI of the calculator.

```jsx
import React, { useState } from 'react'

const Calculator = () => {
  const [inputValue, setInputValue] = useState("")

  function display(value) {
    setInputValue(inputValue + value)
  }

  function calculate() {
    try {
      let ans = eval(inputValue)
      setInputValue(ans)
    } catch (error) {
      setInputValue('Syntax Error')
    }
  }

  function clear() {
    setInputValue("")
  }

  return (
    <>
      <h1 className="header">Calculator Project</h1>
      <form name="calc" className="calculator">
        <input type="text" className="value" value={inputValue} />
        <span className="clear" onClick={clear}>C</span>
        <span onClick={() => display("/")}>/</span>
        <span onClick={() => display("*")}>*</span>
        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>
        <span onClick={() => display("-")}>-</span>
        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span className="plus" onClick={() => display("+")}>+</span>
        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>
        <span onClick={() => display("0")}>0</span>
        <span onClick={() => display("00")}>00</span>
        <span onClick={() => display(".")}>.</span>
        <span onClick={calculate} className="equal">=</span>
      </form>
    </>
  )
}

export default Calculator
```

### App Component

The `App.jsx` file serves as the root component of the application.

```jsx
import Calculator from "./components/Calculator"

function App() {
  return (
    <>
      <Calculator />
    </>
  )
}

export default App
```

### Styling 🖌️

Here's the content of your `index.css` to give the calculator a modern look:

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1b1b1b;
}

.calculator {
  position: relative;
  display: grid;
}

.header {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 20px;
  font-weight: 900;
  color: dodgerblue;
  text-align: center;
  border: 1px solid blueviolet;
  padding: 18px;
  position: relative;
  overflow: hidden;
  transition: scale 1s, margin-bottom 1s, color 2.2s, background-color 1.4s;
}

.header::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;
  background: blueviolet;
  transition: transform 1.4s;
  transform: translate(-25%, 100%) scale(0);
  z-index: -1;
  border-radius: 50%;
}

.header:hover::before {
  transform: translate(-50%, -50%) scale(1);
}

.header:hover {
  color: azure;
  background-color: transparent;
  margin-bottom: 50px;
  scale: 2;
}

.calculator .value {
  grid-column: span 4;
  height: 100px;
  text-align: right;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 18px;
}

.calculator span {
  display: grid;
  width: 60px;
  height: 60px;
  background-color: #292929;
  place-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #fff;
  cursor: pointer;
}

.calculator span.clear {
  grid-column: span 2;
  width: 120px;
  background-color: blueviolet;
}

.calculator span.plus {
  grid-row: span 2;
  height: 120px;
}

.calculator span.equal {
  background-color: dodgerblue;
}
```

## Learn More 📚

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [useState Hook](https://reactjs.org/docs/hooks-state.html)
- [Vite Documentation](https://vitejs.dev/guide/)

## Contributing 🤝

Contributions are welcome! Feel free to open issues or submit pull requests.

---

Enjoy coding! 🎉

Made with ❤️ by [Rakhul👩‍💻](https://github.com/BlackEmpir7199)
```

# 🎨 Toggle Button Color Project

Welcome to the **Toggle Button Color Project**! This simple yet stylish application lets you toggle the background color and text color of a section with a button click. Built using React and Vite, it features a modern, responsive design with intuitive user interactions, making it a perfect starter project for those learning React and front-end development.


## Features ✨

- Toggle background and text color with a button click
- Smooth transitions and hover effects
- Responsive and sleek UI
- Minimalistic design with a motivational quote

## Demo 📸

Check out the demo Images:

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
toggle-button-color-project/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   └── ToggleButtonColor.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
└── package.json
```

## Understanding the Code 🧠

### ToggleButtonColor Component

The `ToggleButtonColor.jsx` file manages the state and UI of the toggle button color functionality.

```jsx
import React, { useState } from 'react'

const ToggleButtonColor = () => {
  const [buttonStyle, setButtonStyle] = useState("azure")
  const [backgroundColor, setBackgroundColor] = useState("black")
  const [textColor, setTextColor] = useState("blue")

  function clickHandle() {
    setBackgroundColor(backgroundColor === "chartreuse" ? "black" : "chartreuse")
    setTextColor(textColor === "black" ? "chartreuse" : "black")
    setButtonStyle(buttonStyle === "azure" ? "black" : "azure")
  }

  return (
    <>
      <section style={{ backgroundColor, color: textColor }}>
        <button onClick={clickHandle} style={{ buttonStyle, color: textColor, border: `2px solid ${textColor}` }}>Toggle Button</button>
        <section className='content'>
          <h1>
            Push Through The Pain <br />
            Giving Up Hurts More.
          </h1>
        </section>
      </section>
    </>
  )
}

export default ToggleButtonColor
```

### App Component

The `App.jsx` file serves as the root component of the application.

```jsx
import ToggleButtonColor from "./components/ToggleButtonColor"

function App() {
  return (
    <>
      <ToggleButtonColor />
    </>
  )
}

export default App
```

### Styling 🖌️

Here's the content of your `index.css` to give the toggle button color project a modern look:

```css
p {
  font-family: 'Bungee Outline';
}

* {
  margin: 0px;
}

body section {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

button {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: transparent;
  cursor: pointer;
  transition: scale 0.8s, background-color 1.2s;
}

button:hover {
  scale: 1.1;
  background-color: rgb(100, 100, 100);
}

section.content h1 {
  font-size: 5rem;
  font-family: 'Bungee Outline';
}

section {
  transition: background-color 1.2s;
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

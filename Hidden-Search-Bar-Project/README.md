# 🔍 Hidden Search Bar Project

Welcome to the **Hidden Search Bar Project**! This intuitive application features a hidden search bar that appears upon clicking an icon. Built using React and Vite, it showcases smooth transitions, a modern design, and a responsive layout.

## Features ✨

- Hidden search bar that appears upon clicking the search icon
- Smooth transitions and intuitive user interactions
- Modern, minimalistic design with a responsive layout
- Customizable background and text color

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

3. **Run the app**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Project Structure 📂

Here's an overview of the project structure:

```
hidden-search-bar-project/
├── public/
│   ├── index.html
│   ├── search.svg
│   └── ...
├── src/
│   ├── components/
│   │   └── HiddenSearchBar.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
└── package.json
```

## Understanding the Code 🧠

### HiddenSearchBar Component

The `HiddenSearchBar.jsx` file manages the state and UI of the hidden search bar functionality.

```jsx
import React, { useState } from 'react'

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false)
  const [bgColor, setBgColor] = useState("azure")

  function handleClick(e) {
    setBgColor("#1a1a1a")
    if (e.target.className === "container") {
      setShowInput(false)
      setBgColor("azure")
    }
  }

  return (
    <>
      <section className='container' style={{ backgroundColor: bgColor }} onClick={handleClick}>
        <h1>Hidden Search Bar Project</h1>
        <p>Click Search Icon</p>
        {showInput ? <input type='text' placeholder='Search....' /> : <img src='public/search.svg' onClick={() => setShowInput(true)} />}
      </section>
    </>
  )
}

export default HiddenSearchBar
```

### App Component

The `App.jsx` file serves as the root component of the application.

```jsx
import HiddenSearchBar from "./components/HiddenSearchBar"

function App() {
  return (
    <>
      <HiddenSearchBar />
    </>
  )
}

export default App
```

### Styling 🖌️

Here's the content of your `index.css` to give the hidden search bar project a modern look:

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1a1a1a;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  border: 2px solid #1a1a1a;
  transition: background-color 0.8s;
}

.container h1 {
  color: #1a1a1a;
  font-size: 3rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 300;
  font-stretch: ultra-expanded;
  margin-bottom: 30px;
}

.container p {
  color: #1a1a1a;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

input[type='text'] {
  padding: 10px;
  font-size: 1rem;
  margin-top: 10px;
}

img {
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-top: 10px;
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

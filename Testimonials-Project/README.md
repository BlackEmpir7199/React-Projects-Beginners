# ✨ Testimonials Project

Welcome to the **Testimonials Project**! This project showcases a simple yet sleek React component that displays a series of testimonials with a modern design. Users can navigate through the testimonials using "Prev" and "Next" buttons.

## 🛠️ Features

- **Responsive Design**: The layout adjusts seamlessly for different screen sizes.
- **Interactive Navigation**: Users can click through testimonials.
- **Modern Aesthetics**: Clean and minimalist design with a dark theme.

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the project:**
   ```bash
   npm start
   ```

3. Open your browser and go to `http://localhost:5173`.

## 💻 Code Overview

### Testimonials Component

```jsx
import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
  ];

  const [index, setIndex] = useState(0);

  const prevClick = () => {
    setIndex((index + testimonials.length - 1) % testimonials.length);
  };

  const nextClick = () => {
    setIndex((index + 1) % testimonials.length);
  };

  return (
    <div className="outer">
      <h1>Testimonials Project</h1>
      <div className="Testimonials">
        <div className="quote">{testimonials[index].quote}</div>
        <div className="author">{testimonials[index].author}</div>
      </div>
      <nav className="buttonNav">
        <button onClick={prevClick}>Prev</button>
        <button onClick={nextClick}>Next</button>
      </nav>
    </div>
  );
};

export default Testimonials;
```

### Styling

```css
body {
  background-color: #0b0e14;
  margin: 0px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

h1 {
  font-size: 2.5rem;
  color: azure;
}

.outer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}

.Testimonials {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 10px solid chartreuse;
  box-shadow: 0px 0px 12px chartreuse;
  height: 12rem;
  width: 45rem;
  background-color: azure;
}

.Testimonials:hover {
  box-shadow: 0px 0px 50px chartreuse;
}

.author {
  color: #0b0e14;
  font-size: large;
  font-weight: 600;
}

.quote {
  color: chartreuse;
  font-size: 2rem;
  height: 8rem;
  text-align: center;
  padding: 30px;
  background-color: #0b0e14;
  font-family: 'Courier New', Courier, monospace;
}

.buttonNav {
  margin: 70px;
  display: flex;
}

button {
  background-color: transparent;
  height: 55px;
  width: 120px;
  font-size: 1.2rem;
  font-weight: 600;
  color: azure;
  margin: 10px;
  border: 2px solid chartreuse;
  transition: background 3s;
}

button:hover {
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(64,121,9,1) 42%, rgba(159,255,0,1) 91%);
}

@media screen and (max-width: 600px) {
  .Testimonials {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 10px solid chartreuse;
    box-shadow: 0px 0px 12px chartreuse;
    height: 16rem;
    width: 24rem;
    background-color: azure;
  }
  .quote {
    height: 16rem;
    padding: 16px;
    font-size: 1.8rem;
  }
}
```

### App.jsx 
import Testimonials from './components/Testimonials'

function App() {
  return (
    <>
      <Testimonials/>
    </>
  )
}

export default App

## Contributing 🤝

Contributions are welcome! Feel free to open issues or submit pull requests.

---

Enjoy coding! 🎉

Made with ❤️ by [Rakhul👩‍💻](https://github.com/BlackEmpir7199)

# 🍽️ Meal API Project

Welcome to the **Meal API Project**! This project showcases a collection of meals fetched from the [TheMealDB API](https://www.themealdb.com/) using React and Vite. The project features a clean, modern UI and allows users to browse through various seafood meals with beautiful card layouts.


## Features ✨

- Fetch and display a list of seafood meals from TheMealDB API
- Responsive card layout for meal items
- Hover effects for enhanced user interaction
- Stylish and modern UI

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

## Understanding the Code 🧠

### Meal Component

The `Meal.js` file is responsible for fetching and displaying the meals.

```jsx
import axios from 'axios'
import { useState, useEffect } from 'react'

const Meal = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then(res => {
        setItems(res.data.meals)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card" key={idMeal}>
        <img src={strMealThumb} alt='meal' />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    )
  })

  return (
    <>
      <h1>Meal API Project</h1>
      <div className="items-container">{itemsList}</div>
    </>
  )
}

export default Meal
```

### App Component

The `App.js` file serves as the root component of the application.

```jsx
import Meal from "./components/Meal"

function App() {
  return (
    <Meal />
  )
}

export default App
```

### Styling 🖌️

Add some stylish CSS to make it look great. Here's the content of your `index.css`:

```css
body {
  background-color: burlywood;
}

h1 {
  font-size: 4rem;
  background: -webkit-linear-gradient(rgb(142, 3, 16) 0.2%, rgb(223, 86, 32));
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

.items-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px;
}

.card {
  background-color: beige;
  font-size: 12px;
  color: rgb(68, 68, 68);
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin: 10px;
  padding: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: 1s ease, font-size 1s, font-weight 1s, background-color 1s;
}

.card:hover {
  transform: scale(1.1);
  font-size: 16px;
  color: brown;
  background-color: blanchedalmond;
  font-weight: 700;
}

.content {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

p {
  font-weight: bold;
}

img {
  border-radius: 5px;
  height: 250px;
  width: 300px;
}
```

## Learn More 📚

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [useEffect Hook](https://reactjs.org/docs/hooks-effect.html)
- [Axios](https://github.com/axios/axios)

## Contributing 🤝

Contributions are welcome! Feel free to open issues or submit pull requests.

---

Enjoy coding! 🎉

Made with ❤️ by [Rakhul👩‍💻](https://github.com/BlackEmpir7199)

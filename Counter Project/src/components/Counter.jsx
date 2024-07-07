import { useState } from "react"

const Counter = () => {
    const [Count,setCount] = useState(0);

    const incrementHandle = () =>{
        setCount(Count+1);
    }
    const decrementHandle = () =>{
        setCount(Count-1);
    }
    return (

    <div className="container">
        <h1 className="heading">Counter Project</h1>
        <h1 className="number">{Count}</h1>

    <section className="btns-container">
        <button className="increment" onClick={incrementHandle}>+</button>
        <button className="Decrement" onClick={decrementHandle}>-</button>
    </section>
    </div>

  )
}

export default Counter
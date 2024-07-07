import axios from 'axios'
import { useState,useEffect } from 'react'

const Meal = () => {
    const[items,setItems] = useState([])
    
    useEffect(() =>{
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood').
        then(res =>{
            setItems(res.data.meals)
        }).
        catch(err =>{
            console.log(err);
        });
    },[]);

    const itemsList=items.map(({strMeal,strMealThumb,idMeal})=>{
        return(
    
            <section className="card" key={idMeal}>
                <img src={strMealThumb} alt='meal'/>
                <section className="content">
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
     
        )
    })
    return (<>
        <h1>Meal API Project</h1>
    <div className="items-container">{itemsList}</div></>
    )
}

export default Meal
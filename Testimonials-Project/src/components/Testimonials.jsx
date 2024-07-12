import React, { useState } from 'react'

const Testimonials = () => {

   const testimonials = [
    {
        quote:"The only way to do great work is to love what you do.",
        author:"Steve Jobs"
    },
    {
        quote:"Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author:"Winston Churchill"
    },
    {
        quote:"Life is what happens when you're busy making other plans.",
        author:"John Lennon"
    }
   ]

  const [index, setIndex] = useState(0)

    const prevClick = () =>{
        setIndex((index + testimonials.length-1)%(testimonials.length));
    }
    const nextClick = () =>{
        setIndex((index + 1)%(testimonials.length));
    }
  return (
    <div className='outer'>     
    <div className='Testimonials'>
        <div className='quote'>
            {testimonials[index].quote}
        </div>
        <div className='author'>
            {testimonials[index].author}
        </div>
        <nav className='buttonNav'>
        <button onClick={prevClick}>
        Prev
        </button>
        <button onClick={nextClick}>
        Next
        </button>
        </nav>
    </div>
    </div>
  )
}

export default Testimonials
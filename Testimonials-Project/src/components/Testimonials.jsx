import React from 'react'

const Testimonials = () => {

   const testimonials = [
    {
        author:"Varan"
    },
    {
        author:"vasu"
    }
   ]

  const [index, setIndex] = useState(0)

    const prevClick = (currIndex) =>{
        setIndex((currIndex + testimonials.length()-1)%(testimonials.length()-1));
    }
    const nextClick = (currIndex) =>{
        setIndex((currIndex + 1)%(testimonials.length()-1));
    }
  return (
    <>
    <div className='Testimonials'>
        <div>
            {}
        </div>

    </div>
    </>
  )
}

export default Testimonials
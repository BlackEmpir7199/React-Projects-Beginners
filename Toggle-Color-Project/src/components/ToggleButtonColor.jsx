import React, { useState } from 'react'

const ToggleButtonColor = () => {

  const[buttonStyle,setButtonStyle] = useState("azure")
  const[backgroundColor,setBackgroundColor] = useState("black")
  const[textColor,setTextColor] = useState("blue");  

  function clickHandle(){
    setBackgroundColor(backgroundColor==="chartreuse"?"black":"chartreuse")
    setTextColor(textColor==="black"?"chartreuse":"black")
    setButtonStyle(buttonStyle==="azure"?"balck":"azure")
  }

  return (
    <>
    <section style={{backgroundColor,color:textColor}}>
        <button onClick={clickHandle} style={{buttonStyle,color:textColor,border: `2px solid ${textColor}`}}>Toggle Button</button>    
    <section className='content'>
        <h1>
            Push Through The Pain <br/>
            Giving Up Hurts More.
        </h1>
    </section>
    </section>
    </>
  )
}

export default ToggleButtonColor
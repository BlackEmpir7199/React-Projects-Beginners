import React, { useState } from 'react'

const HiddenSearchBar = () => {

  const[showInput,setShowInput]=useState(false);
  const[bgColor,setBgColor]=useState("azure");
  function handleClick(e){
    setBgColor("#1a1a1a")
    if(e.target.className==="container")  {
        setShowInput(false)
        setBgColor("azure")
    }
  }
  return (
    <>
    <section className='container' style={{backgroundColor:bgColor}} onClick={handleClick}>
            <h1>Hidden Search Bar Project</h1>
            <p>Click Search Icon</p>
            {showInput?<input type='text' placeholder='Search....'/>:<img src='public\search.svg' onClick={()=>setShowInput(true)}/>}
    </section>
    </>
  )
}

export default HiddenSearchBar
import React, { useState } from 'react'
import "./TicTac.css"
import circle from "./circle.png"
import cross from "./cross.png"

let data = ["", "", "", "", "", "", "", "", "" ];

let [count, setcount]= useState(0);
let [lock, setlock] = useState(false);
const toggle = (w, num)=>{
if (count%2===0) {
  e.target.innerHTML = `img src = ${cross} `
  data[num]= "x"
  setcount(++count);
} else {
  e.target.innerHTML = `img src = ${circle} `
  data[num]= "0"
  setcount(++count);
}
  }
const TicTac = () => {
  
  return (
    <div className='container'>
      <h1 className='title'> Tic Tac Toe Game In <span> React</span> </h1>
      <div className='board'>
      <div className='row1'>
        <div className='boxes'></div>
        <div className='boxes'></div>
        <div className='boxes'></div>
      </div>
      <div className='row2'>
        <div className='boxes'></div>
        <div className='boxes'></div>
        <div className='boxes'></div>
      </div>
      <div className='row3'>
        <div className='boxes'></div>
        <div className='boxes'></div>
        <div className='boxes'></div>
      </div>
      </div>
      <button className='btn'>
        Reset
      </button>
    </div>
  )
}

export default TicTac
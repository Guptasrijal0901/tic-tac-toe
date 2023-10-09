import React from 'react'
import "./TicTac.css"
import circle from "./circle.png"
import cross from "./cross.png"

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
import React from 'react'
import './styles.css'

function new1() {
  return (
    <div>
      <div className='container'>
      <div>
        <p>Name:</p>
        <input className='back' type="text" />
      </div>
      
      <div>
        <p>Email Address:</p>
        <input className='back' type="text" />
      </div>
      
      <div>
        <p>Password:</p>
        <input className='back' type="text" />
      </div>

      <div className='btn'>
         <button>Sign up</button>
      </div>
      </div>
    </div>
  )
}

export default new1
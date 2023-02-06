import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
      {/* <div className='success'> That's right! 🎉</div> */}
      {/* <div className='failed'> Not Quite, Try again! 😔</div> */}

      <label htmlFor='word'>Enter word: </label>
      <input id='word'/>
      <button className='submit-btn'>Submit</button>
    </div>
  )
}

export default App

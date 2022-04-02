import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'

// // 自创一个标签
// function Welcome(props) {
//   return <h1 className='welcome'>hello,{props.name}</h1>
// }

function App() {
  const [position, setPosition] = useState({ left: 0, top: 0 })
  const [size, setSize] = useState({ width: 300, height: 300 })
  function handleOnclick() {
    console.log()
    // setPosition({ left: .pageX, top: .pageY })
  }
  return (
    <div className='App'>
      <div className='child'></div>
      <div className='child'>
        <div className='up' onClick={handleOnclick}>
          上
        </div>
      </div>
      <div className='child'>
        <div className='image'></div>
      </div>
      <div className='child'>
        <div className='right'>左</div>
      </div>
      <div className='child'></div>

      <div className='child'>
        <div className='down'>下</div>
      </div>
      <div className='child'></div>
      <div className='child'>
        <div className='left'>右</div>
      </div>
      <div className='child'></div>
    </div>
  )
}

export default App

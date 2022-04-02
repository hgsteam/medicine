import './style/boxes.css'
import { useEffect, useState } from 'react'
function Color(props) {
  if (props.state) {
    return <div className='color'></div>
  } else {
    return <div className='color main'></div>
  }
}
function Boxes() {
  const [x, setx] = useState(0)
  const [y, sety] = useState(0)
  function handleTop() {
    if (y > 0) {
      sety(y - 1)
    }
  }
  function handleLeft() {
    if (x > 0) {
      setx(x - 1)
    }
  }
  function handleBottom() {
    if (y < 2) {
      sety(y + 1)
    }
  }
  function handleRight() {
    if (x < 2) {
      setx(x + 1)
    }
  }

  return (
    <div className='container'>
      <div className='boxes'>
        <div className='box'>
          <Color state={(x === 0) & (y === 0) ? true : false}></Color>
        </div>
        <div className='box'>
          <Color state={(x === 1) & (y === 0) ? true : false}></Color>
        </div>
        <div className='box'>
          <Color state={(x === 2) & (y === 0) ? true : false}></Color>
        </div>
        <div className='box'>
          <Color state={(y === 1) & (x === 0) ? true : false}></Color>
        </div>
        <div className='box'>
          <Color state={(y === 1) & (x === 1) ? true : false}></Color>
        </div>
        <div className='box'>
          <Color state={(y === 1) & (x === 2) ? true : false}></Color>
        </div>
        <div className='box'>
          <Color state={(y === 2) & (x === 0) ? true : false}></Color>
        </div>
        <div className='box'>
          <Color state={(y === 2) & (x === 1) ? true : false}></Color>
        </div>
        <div className='box'>
          <Color state={(y === 2) & (x === 2) ? true : false}></Color>
        </div>
      </div>
      <div className='controls'>
        <div className='button1'>
          <div className='button' onClick={handleTop}>
            ↑
          </div>
        </div>
        <div className='button' onClick={handleLeft}>
          ←
        </div>
        <div className='button' onClick={handleBottom}>
          ↓
        </div>
        <div className='button' onClick={handleRight}>
          →
        </div>
      </div>
    </div>
  )
}

export default Boxes

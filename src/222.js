import { useState } from 'react'

function Ifdiv(props) {
  return (
    <div>
      <p style={{ color: props.colorState }}>1212121</p>
    </div>
  )
}

function Ifdiv2(props) {
  if (props.state) {
    return <div>asdfsfsdfsd</div>
  } else {
    return <div style={{ color: 'red' }}>2342134234234234</div>
  }
}

function Second() {
  const [color, setcolor] = useState('red')
  const [divState, setDivState] = useState(true)
  function handleClick() {
    if (color === 'red') {
      setcolor('black')
    } else if (color === 'black') {
      setcolor('red')
    }
  }

  function handleClick2() {
    setDivState(!divState)
  }
  return (
    <div>
      <Ifdiv colorState={color}></Ifdiv>
      <button onClick={handleClick}>anniu</button>
      <Ifdiv2 state={divState}></Ifdiv2>
      <button onClick={handleClick2}>anniu</button>
    </div>
  )
}

export default Second

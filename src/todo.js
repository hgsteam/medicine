import { useState } from 'react'
import './style/todo2.css'

function App() {
  const [context, setContext] = useState('')
  const [list, setlist] = useState([])
  function handleClick() {
    setlist(list.concat(context))
    setContext('')
  }
  function handlekeyUp(e) {
    // console.log(e.code)
    if (e.code === 'Enter') {
      handleClick()
    }
  }
  return (
    <div className='App'>
      <div className='card'>
        <h1>TODO Lists</h1>
        <div className='listContainer'>
          {list.map((e, index) => {
            return (
              <p key={index}>
                {index} .{e}
              </p>
            )
          })}
        </div>
        <div className='inputContainer'>
          <p className='tips'>what needs to be done?</p>
          <input
            onChange={(e) => {
              setContext(e.target.value)
              console.log(context)
            }}
            value={context}
            onKeyUp={handlekeyUp}
          ></input>
          <button onClick={handleClick}>ok</button>
        </div>
      </div>
    </div>
  )
}

export default App

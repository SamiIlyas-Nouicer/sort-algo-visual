import logo from "./logo.svg"
import "./App.css"
import { useState, useEffect } from "react"

function App() {
  const [arrays, setArrays] = useState([
    600, 250, 140, 350, 74, 85, 96, 100, 700, 110, 220, 550, 220, 150, 500, 320,
    200, 400,

    100, 300, 650, 22,
  ])
  const bubbleSort = async () => {
    let arrayCopy = [...arrays]
    for (let i = 0; i < arrayCopy.length; i++) {
      for (let j = 0; j < arrayCopy.length - i - 1; j++) {
        if (arrayCopy[j] > arrayCopy[j + 1]) {
          await new Promise((resolve) => setTimeout(resolve, 100)) // Delay for 1000 milliseconds
          let temp = arrayCopy[j]
          arrayCopy[j] = arrayCopy[j + 1]
          arrayCopy[j + 1] = temp
          setArrays([...arrayCopy])
        }
      }
    }
  }

  return (
    <div className="App">
      <div className="items">
        {arrays.map((array, index) => (
          <div
            className={`cases ${
              arrays.length > 1 && arrays[index] === Math.min(...arrays)
                ? "min"
                : ""
            }`}
            style={{ height: array }}
            key={index}
          >
            {array}
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={() => bubbleSort(arrays)}>bubbleSort</button>
      </div>
    </div>
  )
}

export default App

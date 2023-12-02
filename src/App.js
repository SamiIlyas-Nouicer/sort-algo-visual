import logo from "./logo.svg"
import "./App.css"
import { useState, useEffect } from "react"

function App() {
  const [arrays, setArrays] = useState([
    600, 250, 140, 350, 74, 85, 96, 100, 700, 110, 220, 550, 150, 500, 320, 200,
    400, 100, 300, 650, 22,
  ])
  const [timer, setTimer] = useState(0)

  function shuffleArray(array) {
    let arrayCopy = [...arrays]
    for (let i = arrayCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]]
    }
    setArrays(arrayCopy)
  }

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

  const selectionSort = async () => {
    let arrayCopy = [...arrays]
    for (let i = 0; i < arrayCopy.length; i++) {
      let min = i
      for (let j = i + 1; j < arrayCopy.length; j++) {
        if (arrayCopy[j] < arrayCopy[min]) {
          min = j
        }
      }
      await new Promise((resolve) => setTimeout(resolve, 100)) // Delay for 1000 milliseconds
      let temp = arrayCopy[i]
      arrayCopy[i] = arrayCopy[min]
      arrayCopy[min] = temp
      setArrays([...arrayCopy])
    }
  }

  function merge(arr, l, m, r) {
    var n1 = m - l + 1
    var n2 = r - m

    // Create temp arrays
    var L = new Array(n1)
    var R = new Array(n2)

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++) L[i] = arr[l + i]
    for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j]

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    var i = 0

    // Initial index of second subarray
    var j = 0

    // Initial index of merged subarray
    var k = l

    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i]
        new Promise((resolve) => setTimeout(resolve, 1000))
        setArrays([...arr])
        i++
      } else {
        arr[k] = R[j]
        new Promise((resolve) => setTimeout(resolve, 1000))

        setArrays([...arr])
        j++
      }
      k++
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
      arr[k] = L[i]
      new Promise((resolve) => setTimeout(resolve, 1000))

      setArrays([...arr])
      i++
      k++
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
      arr[k] = R[j]
      new Promise((resolve) => setTimeout(resolve, 1000))

      setArrays([...arr])
      j++
      k++
    }
  }

  // l is for left index and r is
  // right index of the sub-array
  // of arr to be sorted
  function mergeSort(arr, l, r) {
    if (l >= r) {
      return
    }
    var m = l + parseInt((r - l) / 2)

    mergeSort(arr, l, m)
    mergeSort(arr, m + 1, r)
    merge(arr, l, m, r)
  }

  const insertionSort = async () => {
    let arrayCopy = [...arrays]
    let i, key, j

    for (i = 1; i < arrayCopy.length; i++) {
      key = arrayCopy[i]
      j = i - 1

      /* Move elements of arr[0..i-1], that are  
        greater than key, to one position ahead  
        of their current position */
      while (j >= 0 && arrayCopy[j] > key) {
        arrayCopy[j + 1] = arrayCopy[j]
        await new Promise((resolve) => setTimeout(resolve, 100)) // Delay for 1000 milliseconds

        setArrays([...arrayCopy])

        j = j - 1
      }

      // Place the key in its correct position
      arrayCopy[j + 1] = key
      await new Promise((resolve) => setTimeout(resolve, 100)) // Delay for 1000 milliseconds

      setArrays([...arrayCopy])
    }
  }

  const countingSort = () => {
    const arrayCopy = [...arrays]
    let Max = 0
    for (let i = 0; i < arrayCopy.length; i++) {
      Max = Math.max(Max, arrayCopy[i])
    }

    let countArray = new Array(Max + 1)
    for (let i = 0; i < countArray.length; i++) {
      countArray[i] = 0
    }

    for (let i = 0; i < arrayCopy.length; i++) {
      countArray[arrayCopy[i]]++
    }

    for (let i = 1; i <= Max; i++) {
      countArray[i] += countArray[i - 1]
    }

    let outputArray = new Array(arrayCopy.length)
    let currentIndex = arrayCopy.length - 1

    const intervalId = setInterval(() => {
      if (currentIndex >= 0) {
        outputArray[countArray[arrayCopy[currentIndex]] - 1] =
          arrayCopy[currentIndex]
        countArray[arrayCopy[currentIndex]]--

        setArrays([...outputArray]) // Update the state with a new copy of the array
        currentIndex--
      } else {
        clearInterval(intervalId) // Stop the interval when done
      }
    }, 500)
  }

  const quickSort = () => {}

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
        <button onClick={() => selectionSort(arrays)}>selectionSort</button>
        <button onClick={() => mergeSort(arrays, 0, arrays.length - 1)}>
          mergeSort
        </button>
        <button onClick={() => insertionSort(arrays)}>insertionSort</button>
        <button onClick={() => countingSort(arrays)}>countingSort</button>
      </div>
      <button onClick={() => shuffleArray(arrays)}>Shuffle</button>
    </div>
  )
}

export default App

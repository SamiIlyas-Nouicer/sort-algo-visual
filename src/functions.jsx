export function bubbleSort(array) {
  for (let i = 0; i < array.lenght; i++) {
    for (let j = 0; j < array.lenght; j++) {
      if (array[j] > array[j + 1]) {
        setTimeout(() => {
          let temp = array[j]
          array[j] = array[j + 1]
          array[j + 1] = temp
        }, 1000)
      }
    }
  }
  return array
}

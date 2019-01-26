/**
 * 选择排序
 */
const selectSort = (array) => {
  let minIndex = 0
  let def = 0
  if (Array.isArray(array)) {
    for (let i=0; i<array.length - 1; i++) {
      minIndex = i
      for (let k=i+1; k<array.length; k++) {
        if (array[minIndex] > array[k]) {
          minIndex = k
        }
      }
      def = array[i]
      array[i] = array[minIndex]
      array[minIndex] = def
    }
    return array
  }
}

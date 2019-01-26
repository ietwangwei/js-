/**
 * 冒泡排序, 前后项比大小置位
 */
const bubleSort = (array) => {
  if (Array.isArray(array)) {
    for (let i=0; i< array.length; i++) {
      for (let k=i+1; k< array.length; k++) {
        if (array[k] < array[i]) {
          const def = array[i]
          array[i] = array[k]
          array[k] = def
        }
      }
    }
    return array
  }
}

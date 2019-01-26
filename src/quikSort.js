/**
 * 快速排序
 */

const quikSort = (array) => {
  if (Array.isArray(array)) {
    const left = []
    const right = []
    const base = array[0]
    if (array.length <= 1) {
      return array
    }

    for (let i=1; i<array.length; i++) {
      if (array[i] > base) {
        right.push(array[i])
      } else {
        left.push(array[i])
      }
    }

    return [].concat(quikSort(left), base, quikSort(right))
  }
}

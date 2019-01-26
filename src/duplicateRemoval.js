/**
 * 数组去重
 */
// 对象去重
const foo1 = (array) => {
  if (Array.isArray(array)) {
    const map = {}
    const dist = []
    array.forEach(item => {
      if (!map[item]) {
        map[item] = true
        dist.push(item)
      }
    })
    return dist
  }
}

// es7 Set去重
const foo2 = (array) => {
  if (Array.isArray(array)) {
    const dist = new Set(array)
    return Array.from(dist)
  }
}

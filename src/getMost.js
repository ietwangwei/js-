/**
 * 统计一段字符串中出现最多的字母
 */

const getMost = (str) => {
  if (typeof str !== 'string') return
  const map = {}
  for (let i=0; i<str.length; i++) {
    const chartAtI = str.charAt(i)
    if (!map[chartAtI]) {
      map[chartAtI] = 1
    } else {
      map[chartAtI] ++
    }
  }

  let num = 0
  let numString = ''
  for (const key in map) {
    if (map[key] > num) {
      num = map[key]
    }
  }
  const dist = []
  for (const key in map) {
    if (map[key] === num) {
      dist.push({
        num,
        numString: key
      })
    }
  }
  let result = ''
  for (const item of dist) {
    result += `字母${item.numString}，出现了${item.num}次`
  }
  return `以上字符串，出现次数最多的有${dist.length}个，其中${result}`
}

/**
 * 
 * 判断是否回文 
 */
const isPalindrome = (str) => {
  if (typeof str !== 'string') return
  const def = str.split('').reverse().join('')
  return str === def
}

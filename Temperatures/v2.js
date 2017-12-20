var n = parseInt(readline()) // the number of temperatures to analyse
const temp = readline().split(' ')
const arr = temp.map(el => parseInt(el))

const returnMinTemp = () => {
  let result = arr[0]

  if (!Number(result)) return "0"

  arr.map(el => {
    if ((Math.sign(result) < 0 && Math.sign(el) < 0) && (el > result)) {
        result = el
    } else if ((Math.sign(result) >= 0 && Math.sign(el) >= 0) && (el < result)) {
      result = el
    } else if ((Math.sign(result) >= 0 && Math.sign(el) < 0) && (Math.abs(el) === result)) {
      result = result
    } else if ((Math.sign(result) >= 0 && Math.sign(el) < 0) && (Math.abs(el) < result)) {
      result = Math.abs(el)
    } else if ((Math.sign(result) < 0 && Math.abs(result) === el)) {
      result = el
    }
  })

  return result
}

print(returnMinTemp())

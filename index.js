function logger(element, index) {
  console.log(`${index}: ${element}`)
}

function iterativeLog(array) {
  array.forEach(logger)
}

function iterate(callback) {
  var nums = []
  for (var i = 0; i < 6; i++){
    nums.push(i)
  }
  nums.forEach(callback)
  return nums
}

function doToArray(array, callback) {
  array.forEach(callback)
}

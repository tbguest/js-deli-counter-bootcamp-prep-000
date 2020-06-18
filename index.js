
// for testing - not needed
var katzDeliLine = [];

function takeANumber(line, name) {
  return `Welcome, ${name}. You are number ${parseInt(line.slice(-1)) + 1} in line.`
}

// console.log(takeANumber([0, 1, 2, 3], 'Ada'))


function nowServing(line) {
  
  var serving = line.shift(1)
  return serving, line
}

console.log(nowServing([0,1,2,3]))

// for testing - not needed
var katzDeliLine = [];

function takeANumber(line, name) {
  return `Welcome, ${name}. You are number ${parseInt(line.slice(-1)) + 1} in line.`
}

// console.log(takeANumber([0, 1, 2, 3], 'Ada'))


function nowServing(line) {
  
  return line.slice(1)
}

console.log(nowServing([0,1,2,3]))
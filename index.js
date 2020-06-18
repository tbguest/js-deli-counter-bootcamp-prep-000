
// for testing - not needed
var katzDeliLine = [];

function takeANumber(line, name) {
  
  line.push(name)
  
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

// console.log(takeANumber(['q','s','u'], 'Ada'))


function nowServing(line) {
  
  var serving = line.shift(1)
  return line
}

console.log(nowServing(['q','d','h']))
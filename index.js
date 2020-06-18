
// for testing - not needed
var katzDeliLine = [];

function takeANumber(line, name) {
  
  line.push(name)
  
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

// console.log(takeANumber(['q','s','u'], 'Ada'))


function nowServing(line) {
  
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var serving = line.shift(1)
    return `Currently serving ${serving}.`
  }
}

console.log(nowServing(['q']))



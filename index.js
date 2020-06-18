
// for testing - not needed
var katzDeliLine = [];

function takeANumber(line, name) {
  return `Welcome, ${name}. You are number ${line.slice(-1)} in line.`
}

console.log(takeANumber([0, 1, 2, 3], 'Ada'))
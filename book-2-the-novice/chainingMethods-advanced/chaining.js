const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8]
const output = document.getElementById('outputNum')

const total = integers.sort(function (a,b) { return b-a}).filter(function (value) {return value < 19}).map(function(int) {return ((int * 1.5) - 1)}).reduce(function(sum, value){ return sum + value})

output.innerHTML = `<p>${total}</p>`
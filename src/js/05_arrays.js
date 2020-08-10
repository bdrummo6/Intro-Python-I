// For the exercise, look up the methods and functions that are available for use
// with Python lists.

let x = [1, 2, 3]
let y = [8, 9, 10]

// For the following, DO NOT USE AN ASSIGNMENT (=).

// Change x so that it is [1, 2, 3, 4]
x.push(4)
console.log(x)

// Using y, change x so that it is [1, 2, 3, 4, 8, 9, 10]
x = x.concat(y)
console.log(x)

// Change x so that it is [1, 2, 3, 4, 9, 10]
x.splice(4, 1)
console.log(x)

// Change x so that it is [1, 2, 3, 4, 9, 99, 10]
x.splice(5, 0, 99)
console.log(x)

// Print the length of x which should be 7
console.log(x.length)

// Print all the values in x multiplied by 1000
for(let i = 0; i < x.length; i++) {
    console.log(x[i] * 1000)
}
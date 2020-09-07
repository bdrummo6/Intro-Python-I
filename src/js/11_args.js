
// Write a function f1 that takes two integer positional arguments and returns the sum.


const f1 = (num1, num2) => {
    return num1 + num2;
}


console.log(f1(1, 2)); // Should print 3


// Write a function f2 that takes any number of integer arguments and returns the sum.


const f2 = (...nums) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}


console.log(f2(1))                    // Should print 1
console.log(f2(1, 3))                 // Should print 4
console.log(f2(1, 4, -12))            // Should print -7
console.log(f2(7, 9, 1, 3, 4, 9, 0))  // Should print 33

let a = [7, 6, 5, 4]

console.log(f2(...a));   // Should print 22


// Write a function f3 that accepts either one or two arguments. If one argument, it returns that value plus 1.
// If two arguments, it returns the sum of the arguments.

function f3(num1, num2 = 1) {
    return num1 + num2
}

console.log(f3(1, 2));  // Should print 3
console.log(f3(8));     // Should print 9


// Write a function f4 that accepts an arbitrary number of keyword arguments and prints out the keys and values like so:

// key: foo, value: bar
// key: baz, value: 12

function f4(...kw) {
    for (let k in kw) {
        console.log(`key: ${k} value: ${kw[k]}`)
    }
}

// Should print
// key: a, value: 12
// key: b, value: 30
f4(a=12, b=30)

// Should print
//  key: city, value: Berkeley
// key: population, value: 121240
// key: founded, value: "March 23, 1868"
f4(city="Berkeley", population=121240, founded="March 23, 1868")

d = {
    "monster": "goblin",
    "hp": 3
}

// How do you have to modify the f4 call below to make this work?
f4(d)


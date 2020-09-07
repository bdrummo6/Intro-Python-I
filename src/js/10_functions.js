
// Write a function isEven that will return true if the passed-in number is even.

function isEven(num) {
    return num % 2 === 0;
}

// console.log(isEven(8));

// Read a number from the keyboard
// num = int(num)


// Print out "Even!" if the number is even. Otherwise print "Odd"
if (isEven(5)) {
    console.log('Even');
} else {
    console.log('Odd');
}
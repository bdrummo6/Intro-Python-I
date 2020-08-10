
let a = [2, 4, 1, 7, 9, 6]

// Output the second element: 4
console.log(a.slice(1, 2))

// Output the second-to-last element: 9
console.log(a.slice(-2, -1))

// Output the last three elements in the array: [7, 9, 6]
console.log(a.slice(-3))

// Output the two middle elements in the array: [1, 7]
console.log(a.slice(2, 4))

// Output every element except the first one: [4, 1, 7, 9, 6]
console.log(a.slice(1))
// print(a[1:])

// Output every element except the last one: [2, 4, 1, 7, 9]
console.log(a.slice(0, -1))

// For string s...

s = "Hello, world!"

// Output just the 8th-12th characters: "world"
console.log(s.slice(7, 12))
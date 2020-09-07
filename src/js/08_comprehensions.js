
// Write a list comprehension to produce the array [1, 2, 3, 4, 5]

let y = []
for(let i = 0, j = 1; i < 5; i++) {
    y[i] = j
    j++
}

console.log(y)


// Write a list comprehension to produce the cubes of the numbers 0-9:
// [0, 1, 8, 27, 64, 125, 216, 343, 512, 729]


for(let i = 0; i <= 9; i++) {
    y[i] = i ** 3
}

console.log(y)


// Write a list comprehension to produce the uppercase version of all the
// elements in array a. Hint: "foo".upper() is "FOO".

let a = ["foo", "bar", "baz"]

for(let i = 0; i < a.length; i++) {
    a[i] = a[i].toUpperCase()
}

console.log(a)

/*
// Use a list comprehension to create a list containing only the _even_ elements
// the user entered into list x.

x = input("Enter comma-separated numbers: ").split(',')

// What do you need between the square brackets to make it work?
y = [int(i) for i in x if int(i) % 2 == 0]

print(y)*/

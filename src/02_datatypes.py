"""
Python is a strongly-typed language under the hood, which means
that the types of values matter, especially when we're trying
to perform operations on them.

Note that if you try running the following code without making any
changes, you'll get a TypeError saying you can't perform an operation
on a string and an integer.
"""

x = 5
y = "7"

# Write a print statement that combines x + y into the integer value 12

print(x + int(y))  # Type casted y to an integer so x and y could be added to output 12


# Write a print statement that combines x + y into the string value 57

print(str(x) + y)  # Type casted x to a string so x and y could be concatenated to output 57

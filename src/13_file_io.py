"""
Python makes performing file I/O simple. Take a look
at how to read and write to files here:

https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files
"""

# Open up the "foo.txt" file (which already exists) for reading
# Print all the contents of the file, then close the file
# Note: pay close attention to your current directory when trying to open "foo.txt"


foo = open('foo.txt')  # second argument left blank, because default 'r' which opens for reading
print(foo.read())
foo.close()

# with open('foo.txt') as foo:
#    print(foo.read())

# Open up a file called "bar.txt" (which doesn't exist yet) for
# writing. Write three lines of arbitrary content to that file,
# then close the file. Open up "bar.txt" and inspect it to make
# sure that it contains what you expect it to contain

bar_lines = [
    'This is line #1 of bar.txt\n',
    'This is line #2 of bar.txt\n',
    'This is line #3 of bar.txt',
]

bar = open('bar.txt', 'w')
bar.writelines(bar_lines)
bar.close()
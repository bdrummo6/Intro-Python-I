# Experiment with scopes in Python.
# Good reading: https://www.programiz.com/python-programming/global-local-nonlocal-variables

# When you use a variable in a function, it's local in scope to the function.

# global: module
# local: functions
# nonlocal (enclosing): nested functions
# builtin: built-in python functions

x = 12

def change_x():
    global x
    x = 99


change_x()  # Calling function sets global x value to 99 once declaring x global within change_x()

# This prints 12. What do we have to modify in change_x() to get it to print 99?
# Declare x as global in the function definition and set it to 99
print(x)


# This nested function has a similar problem.

def outer():
    y = 120  # nonlocal (enclosing) scope

    def inner():
        nonlocal y  # Changes scope to nonlocal (enclosing)
        y = 999

    inner()

    # This prints 120. What do we have to change in inner() to get it to print 999?
    # Declare y as nonlocal inside inner()
    # Note: Google "python nested function scope".
    print(y)


outer()

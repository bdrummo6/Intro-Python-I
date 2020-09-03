# Make a class LatLon that can be passed parameters `lat` and `lon` to the
# constructor

class LatLon:
    def __init__(self, lat, lon):  # Constructor for creating instances of the LatLon class
        self.lat = lat
        self.lon = lon

# Make a class Waypoint that can be passed parameters `name`, `lat`, and `lon` to the
# constructor. It should inherit from LatLon. Look up the `super` method.

class Waypoint(LatLon):  # Passing LatLon into Waypoint allows Waypoint to inherit from LatLon
    def __init__(self, name, lat, lon):  # Constructor for creating instances of the Waypoint class
        super().__init__(lat, lon)  # Calling super() to inherit lat, lon attributes from LatLon
        self.name = name

    def __str__(self):  # Allows printing a string of an object's attribute values using print(object)
        return f'{self.name}, {self.lat}, {self.lon}'

# Make a class Geocache that can be passed parameters `name`, `difficulty`,
# `size`, `lat`, and `lon` to the constructor. What should it inherit from?

class Geocache(Waypoint):  # Inherits from Waypoint because it shares more attributes with it than LatLon
    def __init__(self, name, difficulty, size, lat, lon):
        super().__init__(name, lat, lon)
        self.difficulty = difficulty
        self.size = size

    def __str__(self):
        # str1 = super().__str__()
        # return f'{str1}, {self.difficulty}, {self.size}'
        return f'{self.name}, {self.difficulty}, {self.size}, {self.lat}, {self.lon}'


# Make a new waypoint and print it out: "Catacombs", 41.70505, -121.51521

waypoint = Waypoint('Catacombs', 41.70505, -121.51521)
print(waypoint)

# Without changing the following line, how can you make it print into something
# more human-readable? Hint: Look up the `object.__str__` method
print(waypoint)

# Make a new geocache "Newberry Views", diff 1.5, size 2, 44.052137, -121.41556

geocache = Geocache("Newberry Views", 1.5, 2, 44.052137, -121.41556)

# Print it--also make this print more nicely
print(geocache)

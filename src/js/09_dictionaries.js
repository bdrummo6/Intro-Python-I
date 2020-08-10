
waypoints = [
    {
        "lat": 43,
        "lon": -121,
        "name": "a place"
    },
    {
        "lat": 41,
        "lon": -123,
        "name": "another place"
    },
    {
        "lat": 43,
        "lon": -122,
        "name": "a third place"
    }
]

// Add a new waypoint to the list
waypoints.push({
    "lat": 33,
    "lon": -99,
    "name": "brad's added place"
})

// print(waypoints)

// Modify the dictionary with name "a place" such that its longitude
// value is -130 and change its name to "not a real place"
// Note: It's okay to access the dictionary using bracket notation on the
// waypoints list.

waypoints[0]['lon'] = -130
waypoints[0]['name'] = 'not a real place'

// print(waypoints)

// Write a loop that prints out all the field values for all the waypoints
// YOUR CODE HERE
for(let i = 0; i < waypoints.length - 1; i++) {
    console.log(waypoints[i].lat, waypoints[i].lon, waypoints[i].name)
}

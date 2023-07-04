// Creating the map object
let myMap = L.map("map", {
    center: [39.82869195347417, -98.57935095398236],
    zoom: 5
  });

  // Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Load the GeoJSON data.
let geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(geoData).then(function(data) {
    console.log(data)
});
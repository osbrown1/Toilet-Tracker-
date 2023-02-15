/* eslint-disable */
import {leaflet} from 'leaflet';
import 'leaflet/dist/leaflet.css';;
import 'leaflet/src/Leaflet.js';;
import './css/styles.css';
import Marker from './markers.js';
import Map from './maps';
 

// Initialize the map
export function handleMap(){
  let markerObject = new Marker()
  let mymap = L.map("map").setView([45.519859, -122.677803], 13);

// Add a tile layer (the base map)
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(mymap);

// Add a marker to the map
let marker = L.marker([45.519859, -122.677803]).addTo(mymap); {
}

// Add a circle to map
let circle = L.circle([45.50, -122.677], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 1000
}).addTo(mymap)

// Add a popup to the marker
marker.bindPopup("<b>Hello world!</b><br>I am a toilet!").openPopup();

// function onMapClick(event) {
//   alert("you clicked the map at " + event.latlng.lat + event.latlng.lng);
// }

// mymap.addEventlistener("click", onMapClick);

mymap.addEventListener("click", function(event) {
  // Get coordinates of click
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  // Create a new marker with name and coordinates
    const marker = L.marker([lat, lng]).addTo(mymap);
    let input = prompt("Enter Toilet Title:");
    marker.bindPopup(`${input}`).openPopup();

  // Addthe marker to cluster
  markers.addLayer(marker);
});

Map.addLayer(markers);

}

window.addEventListener('load', function() {
  handleMap();
})

// // Create a new marker cluster group
// let markers = L.markerClusterGroup();

// markers.addLayer(marker);
/* eslint-disable */
import {leaflet} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/src/Leaflet.js';
import './css/styles.css';
 

// Initialize the map
function map(){
let mymap = L.map("map").setView([45.519859, -122.677803], 13);

// Add a tile layer (the base map)
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(mymap);

// Add a marker to the map
let marker = L.marker([45.519859, -122.677803]).addTo(mymap);

// Add a popup to the marker
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
}

window.addEventListener('load', function() {
  map();
})

// // Create a new marker cluster group
// let markers = L.markerClusterGroup();

// markers.addLayer(marker);
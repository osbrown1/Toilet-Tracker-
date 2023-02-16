/* eslint-disable */
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';;
import 'leaflet/src/Leaflet.js';;
import './css/styles.css';
import Marker from './markers.js';
import buildMap from './maps';


// Initialize the map
export function handleMap(){
  let markerObject = new Marker()
  let mymap = L.map("map").setView([45.519859, -122.677803], 13);
  // let markerCluster = L.marketClusterGroup();
  
  buildMap(mymap);

  // // Add a tile layer (the base map)
  // L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //     maxZoom: 19,
  //   attribution:
  //     'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  // }).addTo(mymap);

  // Add a marker to the map
  let marker = L.marker([45.519859, -122.677803]).addTo(mymap); {
  }
  // Add a popup to the marker
  marker.bindPopup("<b>Hello world!</b><br>I am Epicodus' Bathroom").openPopup();

  mymap.addEventListener("click", function(event) {
    // Get coordinates of click
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;


    function removeMarker() {
      const marker = this;
      const btn = document.querySelector(".remove");
      btn.addEventListener("click", function () {
        mymap.removeLayer(marker);
      });
    }
    const buttonRemove = '<button type ="button" class="remove">Remove Toilette</button>';
    // Create a new marker with name and coordinates
    const marker = L.marker([lat, lng], {
      draggable: true,
      
    })
      const popup = L.popup();
      marker.addTo(mymap);
      marker.bindPopup(popup);
      let input = document.createElement('input');
      input.type = 'text';
      input.placeholder = "Name of Toilet Location:";
      marker.bindPopup(input);
      marker.openPopup();
      marker.on("popupopen", removeMarker);
      input.addEventListener("change", function() {
        // marker.closePopup();
        // marker.openPopup();
        const title = input.value;
        popup.setContent(`${title} ${buttonRemove}`);
        marker.openPopup();

        popup.addEventListener("click", function(event) {
          
        })
        })
      })

};    

    

    // // creates popup object for marker
    // const popup = L.popup();
    // marker.bindPopup(popup);

    // // creates field for user input
    // const input = document.createElement('input');
    // input.type = 'text';
    // input.placeholder = "Name of Toilet Location:";

    // // Changes popup content to be input, then opens
    // popup.setContent(input);
    // marker.openPopup();

    // // changes the value of popup text to what user entered
    // input.addEventListener("change", function()  {
    //   const title = input.value;
    //   popup.setContent(title + "<br>");

    //   // creates remove button
    //   const removeButton = document.createElement('button');
    //   removeButton.textContent = "Remove";
    //   removeButton.type = "button";
    //   removeButton.id = "removeButtonFin" + marker._leaflet_id; //add unique ID to each removeButton
    //   popup.setContent(popup.getContent() + removeButton.outerHTML);  
     
    //   let removeButtonFin = document.getElementById('removeButtonFin' + marker._leaflet_id);
    //    removeButtonFin.addEventListener('click', function() {
    //     marker.remove();
    //   });
  

// find event listner for the marker
//add remove function to that





window.addEventListener('load', function() {
  handleMap();
  
});
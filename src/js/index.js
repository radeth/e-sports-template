import "jquery";
import "popper.js";
import "bootstrap";
import "./../css/style.scss";
import './mapAndMarkers'




let cords = document.getElementById('cords')
let listOfMarkers = []



function updateListOfMarkers(marker) {
  listOfMarkers.push(marker);
  console.log(listOfMarkers);
  drawCords()
}
function updateListOfMarkersAfterDrag(marker) {
  for (let i = 0; i < Object.keys(listOfMarkers).length; i++) {
    if (listOfMarkers[i].id === marker.id) {
      listOfMarkers[i] = {
        id: marker.id,
        lat: marker.lat,
        lng: marker.lng
      };
    }
  }
  console.log(listOfMarkers);
  drawCords()
}
function drawCords(){
    
}

import "jquery";
import "popper.js";
import "bootstrap";
import "./../css/style.scss";
import "./../../node_modules/leaflet/dist/leaflet.js";
import "./../../node_modules/leaflet/dist/leaflet.css";
import markerImage from "./../../node_modules/leaflet/dist/images/marker-icon-2x.png";
import markerShadowImage from "./../../node_modules/leaflet/dist/images/marker-shadow.png";

const map = new L.Map(document.getElementById("map"));
const tilesUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const mapAttrib =
  'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
const layer = new L.TileLayer(tilesUrl, {
  minZoom: 8,
  maxZoom: 20,
  attribution: mapAttrib
});
let listOfMarkers = [];
let cords = document.getElementById('cords')
map.setView(new L.LatLng(51.745835, 19.461556), 15);
map.addLayer(layer);
map.on("click", e => {
  var myIcon = L.icon({
    iconUrl: markerImage,
    iconSize: [19, 42],
    iconAnchor: [11, 46],
    popupAnchor: [-3, -76],
    shadowUrl: markerShadowImage,
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
  });
  var marker = new L.Marker(e.latlng, { draggable: true, icon: myIcon });
  marker.addTo(map);
  updateListOfMarkers({
    id: marker._leaflet_id,
    lat: marker._latlng.lat,
    lng: marker._latlng.lng
  });
  marker.bindPopup(marker._leaflet_id.toString()).openPopup();

  marker.on("dragend", () =>
    updateListOfMarkersAfterDrag({
      id: marker._leaflet_id,
      lat: marker._latlng.lat,
      lng: marker._latlng.lng
    })
  );
});

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
    cords.innerHTML = '';
    listOfMarkers.forEach(element=>{
        cords.innerHTML += `<tr>
        <th scope="row">${element.id}</th>
        <td>${element.lat}</td>
        <td>${element.lng}</td>
      </tr>`
    })
}

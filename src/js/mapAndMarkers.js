import "leaflet/dist/leaflet";
import "./../../node_modules/leaflet/dist/leaflet.css";
import markerImage from "./../../node_modules/leaflet/dist/images/marker-icon-2x.png";
import markerShadowImage from "./../../node_modules/leaflet/dist/images/marker-shadow.png";
import store from "./redux/store";

const map = new L.Map(document.getElementById("map"));
const tilesUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const mapAttrib =
  'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
const layer = new L.TileLayer(tilesUrl, {
  minZoom: 8,
  maxZoom: 20,
  attribution: mapAttrib
});
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
  marker.bindPopup(marker._leaflet_id.toString()).openPopup();

  store.disptch({
    type:"NEW_CORDS",
    payload:{
      
    }
  })

  marker.on("dragend", () => {});
});

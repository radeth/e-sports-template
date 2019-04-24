import "jquery"
import "popper.js"
import "bootstrap"
import "./../css/style.scss"
import "leaflet/dist/leaflet.js"

const map = new L.Map(document.getElementById('map'));
const tilesUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const mapAttrib = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';

const layer = new L.TileLayer(tilesUrl, {
    minZoom: 8,
    maxZoom: 20,
    attribution: mapAttrib
});
let counter = 0
map.setView(new L.LatLng(51.745835, 19.461556), 15);
map.addLayer(layer);

map.on('click', (e) => {
    var marker = new L.Marker(e.latlng,{draggable:true});
    marker.addTo(map)
    updateListOfMarkers(marker._leaflet_id,marker._latlng)
    marker.bindPopup(marker._leaflet_id.toString()).openPopup()
   
    marker.on('dragend',()=>{
        
    })
})

function updateListOfMarkers(id,location){
    console.log(id,location)
}

import { Component, Input, OnInit } from '@angular/core';
import L from 'leaflet'
import { Marker } from '../interfaces/marker';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  @Input() markerList: Marker[] = [];

  ngOnInit(): void {
    var map = L.map('map').setView([28.467623, -16.2589725], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    for (let marker of this.markerList) {
      let markerPoint = L.marker([marker.lat, marker.lng]).addTo(map);
      markerPoint.bindPopup(`
        <b>CC.AA.:</b> ${marker.ccaa}<br>
        <b>Provincia:</b> ${marker.province}<br>
        <b>Ciudad:</b> ${marker.city}<br>
        <b>Proyecto:</b> ${marker.project}<br>
        <b>Descripción:</b> ${marker.description}<br>
        <b>Fecha:</b> ${marker.date.toLocaleString()}<br>
        <b>Latitud:</b> ${marker.lat}<br>
        <b>Longitud:</b> ${marker.lng}<br>
      `);
    }
  }
}

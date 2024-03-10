import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import L, { LeafletMouseEvent } from 'leaflet'
import { Marker } from '../interfaces/marker';
import { ReportMarker } from '../interfaces/report-marker';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit, OnChanges {
  @Input() markerList: Marker[] = [];
  @Output() createNewMarkerEvent = new EventEmitter<ReportMarker>();

  private map?: L.Map;

  ngOnInit(): void {
    // Creating the map
    this.map = L.map('map').setView([28.467623, -16.2589725], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    // Setting the markers into Map
    this.setMarkers();

    // Finally, we connect out onMapClick function
    // with map click event to let users create
    // a new marker
    // 'this' is sent to set the context of the event
    this.map.on('click', e => this.onMapClick(e), this);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Setting the markers into Map
    this.setMarkers();
  }

  setMarkers() {
    // For each marker, we create a marker into the map
    for (let marker of this.markerList) {
      this.setMarkerIntoMap(marker);
    }
  }

  setMarkerIntoMap(marker: Marker) {
    // If map is undefined (which shouldn't)
    // we don't do nothing
    if (this.map === undefined) {
      return;
    }

    const markerPoint = L.marker([marker.lat, marker.lng]).addTo(this.map);
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

  onMapClick(e: LeafletMouseEvent) {
    // If map is undefined (which shouldn't)
    // we don't do nothing
    if (this.map === undefined) {
      return;
    }

    // We create the popup when user clicks on the map
    let popup = L.popup();
    popup
      .setLatLng(e.latlng)
      .setContent(`
        <b>Crea un nuevo punto de interés</b>
        <form id="newMarkerForm">
          <input type="hidden" name="lat" value="${e.latlng.lat}">
          <input type="hidden" name="lng" value="${e.latlng.lng}">
          <label>Proyecto</label><br>
          <input type="text" name="project"><br>
          <label>Descripción</label><br>
          <input type="text" name="description"><br>
          <button type="submit">Confirmar</button>
        </form>
      `)
      .openOn(this.map);

    // Once popup was created and shown, we proceed to connect submit event
    // with the form, in order to populate the information to its parent
    // component
    document.getElementById('newMarkerForm')?.addEventListener('submit', (e: any) => {
      e.preventDefault();
      const marker: ReportMarker = {
        report: {
          project: e.target.project.value,
          description: e.target.description.value,
          lat: e.target.lat.value,
          lng: e.target.lng.value,
          saved_date: new Date()
        }
      };

      this.createNewMarkerEvent.emit(marker);

      popup.close();
    });
  }
}

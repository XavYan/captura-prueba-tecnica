import { Component, OnInit } from '@angular/core';
import L from 'leaflet'

import { MarkerTableComponent } from '../marker-table/marker-table.component';
import { Marker } from '../interfaces/marker';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MarkerTableComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  readonly markerList: Marker[] = [
    {
      ccaa: "Canarias",
      province: "Santa Cruz de Tenerife",
      city: "Santa Cruz de Tenerife",
      project: "test",
      description: "nuevo",
      date: new Date("2023-11-08 12:22:06"),
      lat: 28.467623,
      lng: -16.2589725
    },
    {
      ccaa: "Andalucía",
      province: "Sevilla",
      city: "Sevilla",
      project: "proyecto1",
      description: "descripción1",
      date: new Date("2024-02-15 09:45:00"),
      lat: 37.388630,
      lng: -5.982070
    },
    {
      ccaa: "Cataluña",
      province: "Barcelona",
      city: "Barcelona",
      project: "proyecto2",
      description: "descripción2",
      date: new Date("2024-03-01 14:30:00"),
      lat: 41.385063,
      lng: 2.173404
    },
    {
      ccaa: "Madrid",
      province: "Madrid",
      city: "Madrid",
      project: "proyecto3",
      description: "descripción3",
      date: new Date("2024-01-20 11:00:00"),
      lat: 40.416775,
      lng: -3.703790
    },
    {
      ccaa: "Galicia",
      province: "A Coruña",
      city: "A Coruña",
      project: "proyecto4",
      description: "descripción4",
      date: new Date("2024-02-28 16:20:00"),
      lat: 43.362343,
      lng: -8.411540
    },
    {
      ccaa: "Comunidad Valenciana",
      province: "Valencia",
      city: "Valencia",
      project: "proyecto5",
      description: "descripción5",
      date: new Date("2024-03-10 08:00:00"),
      lat: 39.469907,
      lng: -0.376288
    },
    {
      ccaa: "Andalucía",
      province: "Sevilla",
      city: "Sevilla",
      project: "proyecto1",
      description: "descripción1",
      date: new Date("2024-02-15 09:45:00"),
      lat: 37.388630,
      lng: -5.982070
    },
    {
      ccaa: "Cataluña",
      province: "Barcelona",
      city: "Barcelona",
      project: "proyecto2",
      description: "descripción2",
      date: new Date("2024-03-01 14:30:00"),
      lat: 41.385063,
      lng: 2.173404
    },
    {
      ccaa: "Madrid",
      province: "Madrid",
      city: "Madrid",
      project: "proyecto3",
      description: "descripción3",
      date: new Date("2024-01-20 11:00:00"),
      lat: 40.416775,
      lng: -3.703790
    },
    {
      ccaa: "Galicia",
      province: "A Coruña",
      city: "A Coruña",
      project: "proyecto4",
      description: "descripción4",
      date: new Date("2024-02-28 16:20:00"),
      lat: 43.362343,
      lng: -8.411540
    },
    {
      ccaa: "Comunidad Valenciana",
      province: "Valencia",
      city: "Valencia",
      project: "proyecto5",
      description: "descripción5",
      date: new Date("2024-03-10 08:00:00"),
      lat: 39.469907,
      lng: -0.376288
    }
  ];

  ngOnInit(): void {
    console.log("Opened HomeComponent");
    var map = L.map('map').setView([28.467623, -16.2589725], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([28.467623, -16.2589725]).addTo(map);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
  }
}

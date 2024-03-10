import { Component } from '@angular/core';

import { MarkerTableComponent } from '../marker-table/marker-table.component';
import { MapComponent } from '../map/map.component';
import { Marker } from '../interfaces/marker';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MarkerTableComponent,
    MapComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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
      "ccaa": "Canarias",
      "province": "Santa Cruz de Tenerife",
      "city": "Santa Cruz de Tenerife",
      "project": "proyecto6",
      "description": "descripción6",
      "date": new Date("2024-03-10T10:30:00"),
      "lat": 28.4682,
      "lng": -16.2546
    },
    {
      "ccaa": "Canarias",
      "province": "Santa Cruz de Tenerife",
      "city": "La Laguna",
      "project": "proyecto7",
      "description": "descripción7",
      "date": new Date("2024-03-12T14:15:00"),
      "lat": 28.4854,
      "lng": -16.3208
    },
    {
      "ccaa": "Canarias",
      "province": "Santa Cruz de Tenerife",
      "city": "Puerto de la Cruz",
      "project": "proyecto8",
      "description": "descripción8",
      "date": new Date("2024-03-14T09:00:00"),
      "lat": 28.4158,
      "lng": -16.5526
    },
    {
      "ccaa": "Canarias",
      "province": "Santa Cruz de Tenerife",
      "city": "Los Cristianos",
      "project": "proyecto9",
      "description": "descripción9",
      "date": new Date("2024-03-16T16:45:00"),
      "lat": 28.0526,
      "lng": -16.7214
    },
    {
      "ccaa": "Canarias",
      "province": "Santa Cruz de Tenerife",
      "city": "El Médano",
      "project": "proyecto10",
      "description": "descripción10",
      "date": new Date("2024-03-18T11:20:00"),
      "lat": 28.0442,
      "lng": -16.5387
    }
  ];
}

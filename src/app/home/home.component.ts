import { Component, OnInit } from '@angular/core';

import { MarkerTableComponent } from '../marker-table/marker-table.component';
import { MapComponent } from '../map/map.component';
import { Marker } from '../interfaces/marker';
import { ReportMarker } from '../interfaces/report-marker';
import { MarkerService } from '../services/marker.service';

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
export class HomeComponent implements OnInit {

  markerList: Marker[] = [];

  constructor(
    private markerService: MarkerService
  ) { }

  ngOnInit(): void {
    this.updateMarkerList();
  }

  createNewMarker(marker: ReportMarker) {
    this.markerService.createNewMarker(marker).subscribe({
      next: response => {
        this.updateMarkerList();
      },
      error: response => {
        alert("No se ha podido crear correctamente el marcador.");
      }
    });
  }

  updateMarkerList() {
    this.markerService.getAllMarkers().subscribe({
      next: response => { this.markerList = response; },
      error: () => {
        alert("Ha ocurrido un error al obtener los datos. Si el error persiste, por favor contacte con soporte.");
      }
    });
  }
}

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
    this.markerService.createNewMarker(marker);
    this.updateMarkerList();
  }

  updateMarkerList() {
    this.markerList = this.markerService.getAllMarkers();
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { Marker } from '../interfaces/marker';

@Component({
  selector: 'app-marker-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './marker-table.component.html',
  styleUrl: './marker-table.component.css'
})
export class MarkerTableComponent {
  @Input() markerList: Marker[] = [];
  @Output() locateMarker = new EventEmitter<Marker>();

  // Variable to identify the project we are looking for
  // in the search input
  projectSearch: string = "";

  // Variable to identify the city we are looking for
  // in the search input
  citySearch: string = "";

  // Variable to identify the marker key where to sort
  markerKeySort: keyof Marker = "ccaa";

  onMarkerRowClick(e: MouseEvent) {
    const lat = (e.currentTarget as HTMLElement).getAttribute('data-row-lat');
    const lng = (e.currentTarget as HTMLElement).getAttribute('data-row-lng');
    if (lat !== null && lng !== null) {
      // In order to find the correct marker,
      // we test both latitude and longitude
      this.locateMarker.emit(
        this.markerList.find(marker =>
          marker.lat.toString() === lat
          && marker.lng.toString() === lng
        )
      );
    }
  }

  // filterTable() function is used to filter and sort the marker table
  // with the user inputs
  filterTable(): Marker[] {
    let filteredMarkerList = this.markerList
      .filter(
        marker => marker.project.toLowerCase().includes(this.projectSearch.toLowerCase())
      );

    if (this.citySearch !== "") {
      filteredMarkerList = filteredMarkerList.filter(marker => marker.city === this.citySearch);
    }

    return filteredMarkerList
      .sort((a, b) => a[this.markerKeySort].toString().localeCompare(b[this.markerKeySort].toString()));
  }

  // Get all the unique cities from markers
  // in order to set the city select options
  getCities(): string[] {
    const markerCities: string[] = [];
    for (const marker of this.markerList) {
      if (!markerCities.includes(marker.city)) {
        markerCities.push(marker.city);
      }
    }
    return markerCities;
  }
}

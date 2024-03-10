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

  projectSearch: string = "";

  onMarkerRowClick(e: MouseEvent) {
    const index = (e.currentTarget as HTMLElement).getAttribute('data-row');
    if (index !== null) {
      this.locateMarker.emit(this.markerList.at(Number(index)));
    }
  }

  filterTable(): Marker[] {
    if (this.projectSearch.length === 0) {
      return this.markerList;
    }
    return this.markerList.filter(
      marker => marker.project.toLowerCase().includes(this.projectSearch.toLowerCase())
    );
  }
}

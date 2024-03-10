import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Marker } from '../interfaces/marker';

@Component({
  selector: 'app-marker-table',
  standalone: true,
  imports: [],
  templateUrl: './marker-table.component.html',
  styleUrl: './marker-table.component.css'
})
export class MarkerTableComponent {
  @Input() markerList: Marker[] = [];
  @Output() locateMarker = new EventEmitter<Marker>();

  onMarkerRowClick(e: MouseEvent) {
    const index = (e.currentTarget as HTMLElement).getAttribute('data-row');
    if (index !== null) {
      this.locateMarker.emit(this.markerList.at(Number(index)));
    }
  }
}

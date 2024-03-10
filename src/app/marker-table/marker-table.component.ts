import { Component, Input } from '@angular/core';
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
}

import { Injectable } from '@angular/core';
import { Marker } from '../interfaces/marker';
import { ReportMarker } from '../interfaces/report-marker';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  private apiURL = "https://capturaforest.agrestaweb.org/backend/public/api/reports-test";

  constructor(
    private http: HttpClient
  ) { }

  getAllMarkers(): Observable<Marker[]> {
    return this.http.get(this.apiURL) as Observable<Marker[]>;
  }

  createNewMarker(reportMarker: ReportMarker) {
    return this.http.post(this.apiURL, reportMarker);
  }
}

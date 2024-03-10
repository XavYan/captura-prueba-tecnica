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
    const marker: Marker = {
      ccaa: "-",
      province: "-",
      city: "-",
      project: reportMarker.report.project,
      description: reportMarker.report.description,
      date: reportMarker.report.saved_date,
      lat: reportMarker.report.lat,
      lng: reportMarker.report.lng
    }
    //this.markerList.push(marker);
    return this.http.post(this.apiURL, reportMarker);
  }
}

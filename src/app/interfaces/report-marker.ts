import { Marker } from "leaflet";

export interface ReportMarker {
    report: {
        project: string;
        description: string;
        lat: number;
        lng: number;
        saved_date: Date;
    }
}

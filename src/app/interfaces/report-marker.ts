// ReportMarker is used to request
// to the backend API the new
// Marker to be created
export interface ReportMarker {
    report: {
        project: string;
        description: string;
        lat: number;
        lng: number;
        saved_date: Date;
    }
}

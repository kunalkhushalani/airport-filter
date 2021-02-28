import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Airport } from '../model/airport.model';

@Injectable({
  providedIn: 'root',
})
export class AirportService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Gets airports
   */
  getAirports(): Observable<Airport[]> {
    return this.httpClient
      .get<Airport[]>(environment.airPortApi)
      .pipe(map((airports: Airport[]) => this.mapAirportData(airports)));
  }

  /**
   * Maps airports null data to empty string
   * @param airPorts airports
   */
  private mapAirportData(airPorts: Airport[]): Airport[] {
    airPorts.map((airPort: Airport) => {
      if (airPort.iata === null) {
        airPort.iata = '';
      }
      if (airPort.icao === null) {
        airPort.icao = '';
      }
      if (airPort.elevation === null) {
        airPort.elevation = 0;
      }
      if (airPort.name === null) {
        airPort.name = '';
      }
      if (airPort.latitude === null) {
        airPort.latitude = 0;
      }
      if (airPort.longitude === null) {
        airPort.longitude = 0;
      }
    });
    return airPorts;
  }
}

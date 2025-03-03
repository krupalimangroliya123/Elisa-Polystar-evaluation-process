import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TramService {
  private apiUrl = 'assets/mock-data.json';

  //Fun facts for rendom display
  private facts: string[] = [
    "🚋 The world's longest tram line is 68 km long!",
    "🛤️ Trams first appeared in the early 19th century.",
    "⚡ Modern trams are powered by electricity and are eco-friendly.",
    "🇦🇺 Melbourne has the world's largest operational tram network.",
    "🚇 Some cities use underground tram tunnels to avoid traffic.",
    "🔄 The first horse-drawn trams were introduced in the 1800s."
  ];

  constructor(private http: HttpClient) {}
  
  //get random fun-facts
  getRandomFact(): string {
    const randomIndex = Math.floor(Math.random() * this.facts.length);
    return this.facts[randomIndex];
  }

  //get list of dipartures
  getDepartures(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => {
        const stopAreas = data.stop_deviations[0]?.scope?.stop_areas || [];

        return data.departures.map((tram:any) => {
          // Create deviations dynamically
          const deviations = stopAreas
            .filter((stop:any) => stop.name !== tram.stop_area.name && stop.name !== tram.destination)
            .map((stop:any) => ({
              stop_name: stop.name,
              stop_id: stop.id,
              status: "ON_ROUTE"
            }));

          return { ...tram, deviations }; // Add deviations to each tram
        }) .filter((tram:any) =>
          tram.line.transport_mode == 'TRAM' &&
          tram.line.designation == '30' &&
          tram.direction_code == 1 &&
          tram.stop_area.name === 'Luma' &&  // Tram departs from Luma
          tram.destination !== 'Linde' &&  // Linde is NOT the last stop
          tram.deviations.some((dev:any) => dev.stop_name === 'Linde') // Tram passes through Linde
        );
      })
    );
  }
}
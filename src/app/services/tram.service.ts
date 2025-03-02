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
      map(data => 
        data.departures.filter((tram:any) => 
          tram.stop_area.name === 'Luma'&& tram.line.transport_mode === "TRAM" && !tram.direction.includes('Sickla')
        )
      )
    );
  }
}
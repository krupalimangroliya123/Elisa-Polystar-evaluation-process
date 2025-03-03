import { Component, OnInit } from '@angular/core';
import { TramService } from '../../services/tram.service';
import { CommonModule } from '@angular/common';

interface Tram {
  destination: string;
  departureTime: string;
  countdown?: number;
}

@Component({
  selector: 'app-tram-list',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './tram-list.component.html',
  styleUrls: ['./tram-list.component.css']
})
export class TramListComponent implements OnInit {
  trams: any[] = [];

  constructor(private tramService: TramService) {}

  ngOnInit(): void {
    this.tramService.getDepartures().subscribe(data => {
      this.trams = data;
    });
  }

//get Fun status
 
getTramStatus(state: string): string {
  switch (state) {
    case 'ATSTOP': return '🛑 At Stop!';
    case 'EXPECTED': return '🕒 Expected!';
    case 'DELAYED': return '⚠️ Delayed!';
    case 'DEPARTED': return '🤷‍♂️ You Missed!';
    default: return '🤷‍♂️ Unknown Status';
  }
}
}

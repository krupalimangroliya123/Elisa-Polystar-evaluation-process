import { Component, OnInit } from '@angular/core';
import { TramService } from '../../services/tram.service';
import { CommonModule } from '@angular/common';
import { TramTimerComponent } from '../tram-timer/tram-timer.component';

interface Tram {
  destination: string;
  departureTime: string;
  countdown?: number;
}

@Component({
  selector: 'app-tram-list',
  standalone:true,
  imports:[CommonModule,TramTimerComponent],
  templateUrl: './tram-list.component.html',
  styleUrls: ['./tram-list.component.css']
})
export class TramListComponent implements OnInit {
  trams: any[] = [];

  constructor(private tramService: TramService) {}

  ngOnInit(): void {
    this.tramService.getDepartures().subscribe(data => {
      this.trams = data.map(tram => ({
        ...tram,
        countdown: this.calculateCountdown(tram.departureTime)
      }));
      setInterval(() => this.updateCountdowns(), 1000);
    });
  }

  //calsulate countdown
  private calculateCountdown(departureTime: string): number {
    return Math.max(Math.floor((new Date(departureTime).getTime() - new Date().getTime()) / 60000), 0);
  }

  //get countdowns
  private updateCountdowns(): void {
    this.trams.forEach(tram => {
      tram.countdown = this.calculateCountdown(tram.departureTime);
    });
  }

//get Fun status
  getTramStatus(state: string): string {
    switch (state) {
      case 'ATSTOP': return '🚋 Ready to Depart!';
      case 'EXPECTED': return '🕒 On Time!';
      case 'DELAYED': return '⚠️ Delayed!';
      default: return '🤷‍♂️ Unknown Status';
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tram-timer',
  imports:[CommonModule],
  standalone:true,
  templateUrl: './tram-timer.component.html',
  styleUrls: ['./tram-timer.component.css']
})
export class TramTimerComponent implements OnInit, OnDestroy {
  @Input() scheduledTime!: string;  //  Receive scheduled departure time
  @Input() status!: string;  //  Receive tram status
  timeLeft: string = 'Calculating...';  
  private intervalId: any;  // Store the interval reference

  ngOnInit(): void {
    this.updateTimeLeft();  // Calculate initially
    this.intervalId = setInterval(() => this.updateTimeLeft(), 1000); // 🔄 Update every second
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);  // Clean up interval when component is destroyed
  }

  //Updated live time left to departure
  updateTimeLeft(): void {
    const now = new Date();  
    const departure = new Date(this.scheduledTime); // ✅ Ensure correct date parsing

    if (isNaN(departure.getTime())) {
      this.timeLeft = 'Invalid Date';  // Handle incorrect date parsing
      return;
    }

    const diffMs = departure.getTime() - now.getTime(); // ✅ Get time difference in milliseconds

    if (diffMs == 0) {
      this.timeLeft = '🚋 Departing Now!';
      clearInterval(this.intervalId); // ✅ Stop timer when tram departs
    } else if (diffMs < 0) {
      this.timeLeft = '🚋 Departing Now!';
      clearInterval(this.intervalId); // ✅ Stop timer when tram departs
     // this.status = 'EXPECTED'
    } else {
      const minutes = Math.floor(diffMs / 60000);
      const seconds = Math.floor((diffMs % 60000) / 1000);
      this.timeLeft = `${minutes} min ${seconds} sec`;
    }
  }

  getTramStatus(state: string): string {
    switch (state) {
      case 'ATSTOP': return '🚋 Ready to Depart!';
      case 'EXPECTED': return '🕒 On Time!';
      case 'DELAYED': return '⚠️ Delayed!';
      case 'DEPARTED': return '🤷‍♂️ You Missed!';
      default: return '🤷‍♂️ Unknown Status';
    }
  }
}

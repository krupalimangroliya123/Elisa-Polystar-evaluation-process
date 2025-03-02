import { Component, OnInit } from '@angular/core';
import { TramService } from '../../services/tram.service';

@Component({
  selector: 'app-tram-fact',
  standalone:true,
  templateUrl: './tram-fact.component.html',
  styleUrls: ['./tram-fact.component.css']
})
export class TramFactComponent implements OnInit {
  fact: string = '';

  constructor(private tramFactsService: TramService) {}

  ngOnInit(): void {
    this.fact = this.tramFactsService.getRandomFact();
  }
}

import { Component } from '@angular/core';
import { TramListComponent } from './components/tram-list/tram-list.component';
import { TramFactComponent } from './components/tram-fact/tram-fact.component';

@Component({
  selector: 'app-root',
  imports:[TramListComponent,TramFactComponent],
  standalone: true,
  template: '<app-tram-fact></app-tram-fact><app-tram-list></app-tram-list>',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'Tram Departures';
}

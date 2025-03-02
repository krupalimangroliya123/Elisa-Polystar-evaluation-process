import { Routes } from '@angular/router';
import { TramListComponent } from './components/tram-list/tram-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'trams', pathMatch: 'full' },
    { path: 'trams', component: TramListComponent }
];

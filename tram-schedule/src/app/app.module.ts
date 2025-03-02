import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TramListComponent } from './components/tram-list/tram-list.component';
import { TramService } from './services/tram.service';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  providers: [TramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
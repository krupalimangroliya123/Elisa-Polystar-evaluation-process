import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramTimerComponent } from './tram-timer.component';

describe('TramTimerComponent', () => {
  let component: TramTimerComponent;
  let fixture: ComponentFixture<TramTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TramTimerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TramTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

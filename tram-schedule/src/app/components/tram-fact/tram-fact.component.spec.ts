import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramFactComponent } from './tram-fact.component';

describe('TramFactComponent', () => {
  let component: TramFactComponent;
  let fixture: ComponentFixture<TramFactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TramFactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TramFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

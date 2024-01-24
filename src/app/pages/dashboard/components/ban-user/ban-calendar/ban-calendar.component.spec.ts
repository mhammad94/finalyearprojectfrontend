import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanCalendarComponent } from './ban-calendar.component';

describe('BanCalendarComponent', () => {
  let component: BanCalendarComponent;
  let fixture: ComponentFixture<BanCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BanCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BanCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

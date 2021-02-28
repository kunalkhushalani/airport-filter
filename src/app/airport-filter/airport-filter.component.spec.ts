import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportFilterComponent } from './airport-filter.component';

describe('AirportFilterComponent', () => {
  let component: AirportFilterComponent;
  let fixture: ComponentFixture<AirportFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirportFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

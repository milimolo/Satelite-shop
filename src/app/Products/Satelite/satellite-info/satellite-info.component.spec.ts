import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatelliteInfoComponent } from './satellite-info.component';

describe('SateliteInfoComponent', () => {
  let component: SatelliteInfoComponent;
  let fixture: ComponentFixture<SatelliteInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatelliteInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatelliteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

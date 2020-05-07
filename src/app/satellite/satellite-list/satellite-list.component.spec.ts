import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatelliteListComponent } from './satellite-list.component';

describe('SateliteListComponent', () => {
  let component: SatelliteListComponent;
  let fixture: ComponentFixture<SatelliteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatelliteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatelliteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

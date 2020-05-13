import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatelliteUpdateComponent } from './satellite-update.component';

describe('SatelliteUpdateComponent', () => {
  let component: SatelliteUpdateComponent;
  let fixture: ComponentFixture<SatelliteUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatelliteUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatelliteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

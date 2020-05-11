import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatelliteCreateComponent } from './satellite-create.component';

describe('SatelliteCreateComponent', () => {
  let component: SatelliteCreateComponent;
  let fixture: ComponentFixture<SatelliteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatelliteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatelliteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

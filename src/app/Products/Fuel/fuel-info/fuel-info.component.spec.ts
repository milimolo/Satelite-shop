import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelInfoComponent } from './fuel-info.component';

describe('FuelInfoComponent', () => {
  let component: FuelInfoComponent;
  let fixture: ComponentFixture<FuelInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

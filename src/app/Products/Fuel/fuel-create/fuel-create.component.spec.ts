import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelCreateComponent } from './fuel-create.component';

describe('FuelCreateComponent', () => {
  let component: FuelCreateComponent;
  let fixture: ComponentFixture<FuelCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

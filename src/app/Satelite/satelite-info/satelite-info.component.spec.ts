import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SateliteInfoComponent } from './satelite-info.component';

describe('SateliteInfoComponent', () => {
  let component: SateliteInfoComponent;
  let fixture: ComponentFixture<SateliteInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SateliteInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SateliteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

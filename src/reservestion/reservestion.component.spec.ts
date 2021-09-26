import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservestionComponent } from './reservestion.component';

describe('ReservestionComponent', () => {
  let component: ReservestionComponent;
  let fixture: ComponentFixture<ReservestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

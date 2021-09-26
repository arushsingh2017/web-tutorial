import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusseatComponent } from './busseat.component';

describe('BusseatComponent', () => {
  let component: BusseatComponent;
  let fixture: ComponentFixture<BusseatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusseatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

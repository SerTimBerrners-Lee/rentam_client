import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartRenterComponent } from './start-renter.component';

describe('StartRenterComponent', () => {
  let component: StartRenterComponent;
  let fixture: ComponentFixture<StartRenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartRenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartRenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarderStandartComponent } from './carder-standart.component';

describe('CarderStandartComponent', () => {
  let component: CarderStandartComponent;
  let fixture: ComponentFixture<CarderStandartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarderStandartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarderStandartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

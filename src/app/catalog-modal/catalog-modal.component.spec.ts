import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogModalComponent } from './catalog-modal.component';

describe('CatalogModalComponent', () => {
  let component: CatalogModalComponent;
  let fixture: ComponentFixture<CatalogModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

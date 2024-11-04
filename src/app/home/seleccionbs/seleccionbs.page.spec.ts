import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionbsPage } from './seleccionbs.page';

describe('SeleccionbsPage', () => {
  let component: SeleccionbsPage;
  let fixture: ComponentFixture<SeleccionbsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionbsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

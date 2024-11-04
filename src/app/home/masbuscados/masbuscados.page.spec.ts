import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasbuscadosPage } from './masbuscados.page';

describe('MasbuscadosPage', () => {
  let component: MasbuscadosPage;
  let fixture: ComponentFixture<MasbuscadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MasbuscadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

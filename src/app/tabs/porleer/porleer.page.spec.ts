import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PorleerPage } from './porleer.page';

describe('PorleerPage', () => {
  let component: PorleerPage;
  let fixture: ComponentFixture<PorleerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PorleerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

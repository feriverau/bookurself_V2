import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MislibrosPage } from './mislibros.page';

describe('MislibrosPage', () => {
  let component: MislibrosPage;
  let fixture: ComponentFixture<MislibrosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MislibrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

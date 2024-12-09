import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { LoginPage } from './login.page';
import { DataService } from '../services/data.service';
import { AlertController } from '@ionic/angular';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let navCtrlSpy: jasmine.SpyObj<NavController>;
  let alertCtrlSpy: jasmine.SpyObj<AlertController>;
  let dataServiceSpy: jasmine.SpyObj<DataService>;

  beforeEach(async () => {
    navCtrlSpy = jasmine.createSpyObj('NavController', ['navigateForward']);
    alertCtrlSpy = jasmine.createSpyObj('AlertController', ['create']);
    dataServiceSpy = jasmine.createSpyObj('DataService', ['loginUser']);
    dataServiceSpy.loginUser.and.returnValue(Promise.resolve(true));

    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [
        { provide: NavController, useValue: navCtrlSpy },
        { provide: AlertController, useValue: alertCtrlSpy },
        { provide: DataService, useValue: dataServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the login page', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home on successful login', async () => {
    component.email = 'test@example.com';
    component.password = '1234';
    await component.login();

    expect(dataServiceSpy.loginUser).toHaveBeenCalledWith('test@example.com', '1234');
    expect(navCtrlSpy.navigateForward).toHaveBeenCalledWith(['/home'], {
      queryParams: { email: 'test@example.com' },
    });
  });

  it('should show an alert if email is empty', async () => {
    component.email = '';
    component.password = '1234';

    const alertSpy = jasmine.createSpyObj('alert', ['present']);
    alertCtrlSpy.create.and.returnValue(Promise.resolve(alertSpy));

    await component.login();
    expect(alertCtrlSpy.create).toHaveBeenCalledWith({
      header: 'Error',
      message: 'El campo de correo no puede estar vacío.',
      buttons: ['OK'],
    });
  });

  it('should show an alert if password is empty', async () => {
    component.email = 'test@example.com';
    component.password = '';

    const alertSpy = jasmine.createSpyObj('alert', ['present']);
    alertCtrlSpy.create.and.returnValue(Promise.resolve(alertSpy));

    await component.login();
    expect(alertCtrlSpy.create).toHaveBeenCalledWith({
      header: 'Error',
      message: 'El campo de contraseña no puede estar vacío.',
      buttons: ['OK'],
    });
  });

  it('should navigate to registro page on registro method call', () => {
    component.registro();
    expect(navCtrlSpy.navigateForward).toHaveBeenCalledWith(['/registro']);
  });
});

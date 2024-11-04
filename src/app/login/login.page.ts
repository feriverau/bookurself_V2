import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private alertController: AlertController) { }

  ngOnInit() {
  }

  //método de la alerta
  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

  
  //función validación formato email
  validarEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  
  login() {
    //verificar correo no vacío
    if (!this.email){
      this.mostrarAlerta('Debe ingresar una dirección de correo');
      return;
    }

    //validar formato
    if (!this.validarEmail(this.email)) {
      this.mostrarAlerta('El formato de correo ingresado no es válido');
      return;
    }
    //verificar contraseña no vacía
    if (!this.password) {
      this.mostrarAlerta('Debe ingresar una contraseña');
      return;
    }
    //verificar largo máximo de contraseña (4 caracteres)
    if (this.password.length > 4) {
      this.mostrarAlerta('La contraseña no puede tener más de 4 caracteres');
      return;
    }

    //navegación hacia home si franquea validaciones
  this.navCtrl.navigateForward(['/home'], {
    queryParams: {
      email: this.email,
      password: this.password
    }
  });
  }

  registro()
  {
    this.navCtrl.navigateForward(['/registro']);
  }

}

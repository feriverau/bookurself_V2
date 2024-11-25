import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';  // Importa el plugin de la cámara
import { DataService } from '../services/data.service';  // Asegúrate de importar el servicio

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: any = {};  // Variable para almacenar los datos del usuario
  capturedImage: string | undefined;  // Variable para almacenar la imagen capturada

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.obtenerDatosUsuario();
  }

  // Método para obtener los datos del usuario
  async obtenerDatosUsuario() {
    const email = localStorage.getItem('email');  // Asumimos que el email está guardado en localStorage

    if (email) {
      const usuario = await this.dataService.getUserData(email);

      if (usuario) {
        this.usuario = usuario;
      } else {
        alert('Usuario no encontrado.');
      }
    } else {
      alert('No se ha encontrado un usuario logueado.');
    }
  }

  // Método para capturar la imagen usando la cámara
  async captureImage() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.DataUrl,  // Devuelve la imagen en formato DataUrl
        source: CameraSource.Camera,  // Usa la cámara del dispositivo
      });

      this.capturedImage = image.dataUrl;  // Guarda la imagen capturada en la variable
    } catch (error) {
      alert('Error al capturar la imagen: ' + error);
    }
  }
}





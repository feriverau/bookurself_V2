import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx'; 


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public dbInstance!: SQLiteObject; 

  constructor(private sqlite: SQLite) {
    this.initializeDatabase();
  }


  async initializeDatabase() {
    this.dbInstance = await this.sqlite.create({
      name: 'bookurs.db',
      location: 'default',
    });
 
    await this.createTables();
  }

    // Crear tabla con los nuevos campos
    async createTables() {
      await this.dbInstance.executeSql(
        `CREATE TABLE IF NOT EXISTS users(
          id INTEGER PRIMARY KEY,
          nombre TEXT,
          apellido TEXT,
          email TEXT UNIQUE,
          password TEXT,
          nivel_educacion TEXT,
          fecha_nacimiento TEXT
        )`,
        []
      );
    }

      // Registrar usuario con los nuevos campos
  async registerUser(nombre: string, apellido: string, email: string, password: string, nivelEducacion: string, fechaNacimiento: string): Promise<boolean> {
    try {
      await this.dbInstance.executeSql(
        `INSERT INTO users (nombre, apellido, email, password, nivel_educacion, fecha_nacimiento)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [nombre, apellido, email, password, nivelEducacion, fechaNacimiento]
      );
      return true;
    } catch (error) {
      alert('Error al registrar usuario:'+error);
      return false;
    }
  }

  async loginUser(email: string, password: string): Promise<boolean> {
    const result = await this.dbInstance.executeSql(
      'SELECT * FROM users WHERE email = ? AND password = ?',
      [email, password]
    );
  
    if (result.rows.length > 0) {
      // Guarda el email en localStorage al momento de hacer login
      localStorage.setItem('email', email);
      return true;
    } else {
      return false;
    }
  }
  

  // DataService
async getUserData(email: string): Promise<any> {
  try {
    const result = await this.dbInstance.executeSql(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (result.rows.length > 0) {
      // Retorna el primer usuario encontrado
      return result.rows.item(0);
    } else {
      return null; // Si no se encuentra al usuario, devuelve null
    }
  } catch (error) {
    console.error('Error al obtener los datos del usuario:', error);
    return null; // Retorna null en caso de error
  }
}

}
 
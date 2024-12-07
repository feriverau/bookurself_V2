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

      await this.dbInstance.executeSql(
        `CREATE TABLE IF NOT EXISTS read_books(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          author TEXT NOT NULL,
          user_email TEXT NOT NULL,
          FOREIGN KEY (user_email) REFERENCES users(email)
        )`,
        []
      );

        // Tabla de libros planeados para leer
      await this.dbInstance.executeSql(
        `CREATE TABLE IF NOT EXISTS toread_books(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          author TEXT NOT NULL,
          user_email TEXT NOT NULL,
          FOREIGN KEY (user_email) REFERENCES users(email)
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

// Guardar un libro en la lista de libros ya leídos
async addReadBook(title: string, author: string, userEmail: string): Promise<void> {
  try {
    await this.dbInstance.executeSql(
      `INSERT INTO read_books (title, author, user_email) VALUES (?, ?, ?)`,
      [title, author, userEmail]
    );
  } catch (error) {
    console.error('Error al guardar el libro:', error);
  }
}

// Obtener todos los libros ya leídos de un usuario
async getReadBooks(userEmail: string): Promise<any[]> {
  try {
    const result = await this.dbInstance.executeSql(
      `SELECT * FROM read_books WHERE user_email = ?`,
      [userEmail]
    );

    const books = [];
    for (let i = 0; i < result.rows.length; i++) {
      books.push(result.rows.item(i));
    }
    return books;
  } catch (error) {
    console.error('Error al obtener los libros ya leídos:', error);
    return [];
  }
}

// Eliminar un libro ya leído
async deleteReadBook(title: string, author: string, email: string): Promise<void> {
  const query = `DELETE FROM read_books WHERE title = ? AND author = ? AND user_email = ?`;
  await this.dbInstance.executeSql(query, [title, author, email]);
}


// Guardar un libro en la lista de libros planeados para leer
async addToReadBook(title: string, author: string, userEmail: string): Promise<void> {
  try {
    await this.dbInstance.executeSql(
      `INSERT INTO toread_books (title, author, user_email) VALUES (?, ?, ?)`,
      [title, author, userEmail]
    );
  } catch (error) {
    console.error('Error al guardar el libro planeado para leer:', error);
  }
}

// Obtener todos los libros planeados para leer de un usuario
async getToReadBooks(userEmail: string): Promise<any[]> {
  try {
    const result = await this.dbInstance.executeSql(
      `SELECT * FROM toread_books WHERE user_email = ?`,
      [userEmail]
    );

    const books = [];
    for (let i = 0; i < result.rows.length; i++) {
      books.push(result.rows.item(i));
    }
    return books;
  } catch (error) {
    console.error('Error al obtener los libros planeados para leer:', error);
    return [];
  }
}

// Eliminar un libro de la lista de libros planeados para leer
async deleteToReadBook(title: string, author: string, email: string): Promise<void> {
  const query = `DELETE FROM toread_books WHERE title = ? AND author = ? AND user_email = ?`;
  await this.dbInstance.executeSql(query, [title, author, email]);
}





}
 
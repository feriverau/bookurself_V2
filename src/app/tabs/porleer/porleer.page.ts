import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'; // Usamos ApiService para la búsqueda de libros
import { DataService } from '../../services/data.service'; // Usamos DataService para los libros ya leídos y por leer

@Component({
  selector: 'app-porleer',
  templateUrl: './porleer.page.html',
  styleUrls: ['./porleer.page.scss'],
})
export class PorleerPage implements OnInit {
  searchTerm: string = ''; // Término de búsqueda
  filteredBooks: any[] = []; // Libros filtrados por búsqueda
  toReadBooks: any[] = []; // Libros por leer

  constructor(
    private apiService: ApiService, // Servicio para la búsqueda de libros
    private dataService: DataService // Servicio para gestionar los libros por leer y leídos
  ) {}

  async ngOnInit() {
    // Cargar los libros por leer al iniciar la página
    const email = localStorage.getItem('email'); // Obtener el correo del usuario
    if (email) {
      this.toReadBooks = await this.dataService.getToReadBooks(email); // Obtener los libros por leer
    }
  }

  // Filtrar los libros de acuerdo al término de búsqueda
  filterBooks() {
    if (this.searchTerm.trim() === '') {
      this.filteredBooks = []; // Si no hay término de búsqueda, limpiar la lista
      return;
    }

    // Llamada al servicio para buscar los libros
    this.apiService.searchBooks(this.searchTerm).subscribe(
      (response) => {
        // Mapear los resultados de la búsqueda
        this.filteredBooks = response.docs.map((item: any) => ({
          title: item.title,
          author: item.author_name ? item.author_name[0] : 'Desconocido', // Verificar autor
        }));
      },
      (error) => {
        console.error('Error al buscar libros:', error); // Manejo de errores
      }
    );
  }

  // Agregar un libro a los libros por leer
  async addBook(book: any) {
    const email = localStorage.getItem('email');
    if (!email) return; // Si no hay correo, salir

    try {
      // Agregar el libro a la base de datos (tabla toread_books)
      await this.dataService.addToReadBook(book.title, book.author, email);

      // Actualizar la lista local de libros por leer
      this.toReadBooks = await this.dataService.getToReadBooks(email);
    } catch (error) {
      console.error('Error al agregar el libro:', error); // Manejo de errores
    }
  }

  // Eliminar un libro de los libros por leer
  async deleteBook(book: any, index: number) {
    const email = localStorage.getItem('email');
    if (!email) return; // Si no hay correo, salir

    try {
      // Eliminar el libro de la base de datos (tabla toread_books)
      await this.dataService.deleteToReadBook(book.title, book.author, email);

      // Eliminar el libro de la lista local
      this.toReadBooks.splice(index, 1);
    } catch (error) {
      console.error('Error al eliminar el libro:', error); // Manejo de errores
    }
  }
}

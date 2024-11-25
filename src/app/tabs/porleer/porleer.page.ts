import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'; // Importa el servicio de la API

interface Book {
  title: string;
  author: string;
}

@Component({
  selector: 'app-porleer',
  templateUrl: './porleer.page.html',
  styleUrls: ['./porleer.page.scss'],
})
export class PorleerPage implements OnInit {
  searchTerm: string = ''; // Término de búsqueda
  books: Book[] = []; // Lista de libros traídos de la API
  filteredBooks: Book[] = []; 
  readBooks: Book[] = []; // Lista de libros seleccionados para leer

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // Inicialmente no hay libros seleccionados
    this.filteredBooks = []; // O puedes inicializar con algunos libros si lo deseas
  }

  // Función para filtrar libros según el término de búsqueda
  filterBooks() {
    if (this.searchTerm.trim() === '') {
      this.filteredBooks = []; // Si no hay término, no mostrar resultados
      return;
    }

    // Llamada al servicio de la API para obtener los libros según el término
    this.apiService.searchBooks(this.searchTerm).subscribe(
      (response) => {
        // Mapea los resultados de la API a nuestro modelo de Book
        this.filteredBooks = response.docs.map((item: any) => ({
          title: item.title,
          author: item.author_name ? item.author_name[0] : 'Desconocido',
        }));
      },
      (error) => {
        console.error('Error al buscar libros:', error);
      }
    );
  }

  // Función para agregar un libro a los "libros planeo leer"
  addBook(book: Book) {
    // Verifica si el libro no está ya en la lista de libros leídos
    if (!this.readBooks.includes(book)) {
      this.readBooks.push(book);
    }
  }
}


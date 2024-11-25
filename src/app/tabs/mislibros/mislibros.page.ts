import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

interface Book {
  title: string;
  author: string;
}

@Component({
  selector: 'app-mislibros',
  templateUrl: './mislibros.page.html',
  styleUrls: ['./mislibros.page.scss'],
})
export class MislibrosPage implements OnInit {
  searchTerm: string = '';
  books: Book[] = [];
  filteredBooks: Book[] = [];
  readBooks: Book[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  filterBooks() {
    if (this.searchTerm.trim() === '') {
      this.filteredBooks = [];
      return;
    }

    // Llama al servicio para buscar libros
    this.apiService.searchBooks(this.searchTerm).subscribe(
      (response) => {
        // Mapear resultados de la API al modelo Book
        this.filteredBooks = response.docs.map((item: any) => ({
          title: item.title,
          author: item.author_name ? item.author_name[0] : 'Desconocido'
        }));
      },
      (error) => {
        console.error('Error al buscar libros:', error);
      }
    );
  }

  addBook(book: Book) {
    this.readBooks.push(book);
  }
}


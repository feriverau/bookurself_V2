import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-mislibros',
  templateUrl: './mislibros.page.html',
  styleUrls: ['./mislibros.page.scss'],
})
export class MislibrosPage implements OnInit {
  searchTerm: string = '';
  books: any[] = [];
  filteredBooks: any[] = [];
  readBooks: any[] = [];

  constructor(
    private apiService: ApiService,
    private dataService: DataService
  ) {}

  async ngOnInit() {
    // Cargar libros ya leídos al iniciar la página
    const email = localStorage.getItem('email'); // Correo del usuario actual
    if (email) {
      this.readBooks = await this.dataService.getReadBooks(email);
    }
  }

  filterBooks() {
    if (this.searchTerm.trim() === '') {
      this.filteredBooks = [];
      return;
    }

    this.apiService.searchBooks(this.searchTerm).subscribe(
      (response) => {
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

  async addBook(book: any) {
    const email = localStorage.getItem('email');
    if (!email) return;

    // Agregar libro a la base de datos
    await this.dataService.addReadBook(book.title, book.author, email);

    // Actualizar la lista local de libros ya leídos
    this.readBooks = await this.dataService.getReadBooks(email);
  }

  async deleteBook(book: any, index: number) {
    const email = localStorage.getItem('email');
    if (!email) return;

    try {
      // Eliminar el libro de la base de datos
      await this.dataService.deleteReadBook(book.title, book.author, email);

      // Eliminar el libro de la lista local
      this.readBooks.splice(index, 1);
    } catch (error) {
      console.error('Error al eliminar el libro:', error);
    }
  }
}



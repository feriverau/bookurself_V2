import { Component, OnInit } from '@angular/core';

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
  searchTerm: string = ''; // Término de búsqueda
  books: Book[] = [ // Lista de libros simulada
    { title: '1984', author: 'George Orwell' },
    { title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
    { title: 'El Quijote', author: 'Miguel de Cervantes' },
    { title: "Moby Dick", author: "Herman Melville" },
    { title: "El gran Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Crimen y castigo", author: "Fiódor Dostoyevski" },
    { title: "El amor en los tiempos del cólera", author: "Gabriel García Márquez" },
    { title: "La metamorfosis", author: "Franz Kafka" },
    { title: "El viejo y el mar", author: "Ernest Hemingway" },
    { title: "La odisea", author: "Homero" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" },
    { title: "En busca del tiempo perdido", author: "Marcel Proust" },
    { title: "Ulises", author: "James Joyce" },
    { title: "Cumbres borrascosas", author: "Emily Brontë" },
    { title: "El retrato de Dorian Gray", author: "Oscar Wilde" },
    { title: "Los miserables", author: "Victor Hugo" },
    { title: "La guerra y la paz", author: "León Tolstói" },
    { title: "El guardián entre el centeno", author: "J.D. Salinger" },
    { title: "Las aventuras de Huckleberry Finn", author: "Mark Twain" },
    { title: "El proceso", author: "Franz Kafka" },
    { title: "El conde de Montecristo", author: "Alexandre Dumas" },
    { title: "Los hermanos Karamazov", author: "Fiódor Dostoyevski" },
    { title: "El túnel", author: "Ernesto Sabato" },
    { title: "La casa de los espíritus", author: "Isabel Allende" },
    { title: "Crónica de una muerte anunciada", author: "Gabriel García Márquez" },
    { title: "Rayuela", author: "Julio Cortázar" },
    
  ];
  filteredBooks: Book[] = []; // Libros filtrados según el término de búsqueda
  readBooks: Book[] = []; // Libros ya leídos

  constructor() { }

  ngOnInit() {
    this.filteredBooks = this.books; // Inicialmente muestra todos los libros
  }

  filterBooks() {
    const term = this.searchTerm.toLowerCase();
    this.filteredBooks = this.books.filter(book =>
      book.title.toLowerCase().includes(term) || book.author.toLowerCase().includes(term)
    );
  }

  addBook(book: Book) {
    if (!this.readBooks.includes(book)) {
      this.readBooks.push(book);
    }
  }
}

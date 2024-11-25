import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'https://openlibrary.org/search.json'; // URL base de la API

  constructor(private http: HttpClient) { }

  // Método para buscar libros por título
  searchBooks(query: string): Observable<any> {
    const url = `${this.baseUrl}?title=${query}`;
    return this.http.get(url);
  }
}

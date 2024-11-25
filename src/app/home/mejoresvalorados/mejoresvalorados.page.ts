import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mejoresvalorados',
  templateUrl: './mejoresvalorados.page.html',
  styleUrls: ['./mejoresvalorados.page.scss'],
})
export class MejoresvaloradosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * Abre una URL en una nueva pestaña del navegador.
   * @param url - La URL a abrir.
   */
  openUrl(url: string): void {
    window.open(url, '_blank'); // Abre la URL en una nueva pestaña
  }

}

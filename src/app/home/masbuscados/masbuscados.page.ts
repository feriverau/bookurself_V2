import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masbuscados',
  templateUrl: './masbuscados.page.html',
  styleUrls: ['./masbuscados.page.scss'],
})
export class MasbuscadosPage implements OnInit {

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

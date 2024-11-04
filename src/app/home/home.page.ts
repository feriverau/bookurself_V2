import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string = '';
  password: string = '';
  bienvenidos: string = 'Bienvenid@';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    //obtener parámetros url
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.password = params['password'];
    });
  }

  // Método para navegar a las diferentes páginas
  navigateTo(page: string) {
    this.router.navigate([page]);
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasbuscadosPage } from './masbuscados.page';

const routes: Routes = [
  {
    path: '',
    component: MasbuscadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasbuscadosPageRoutingModule {}

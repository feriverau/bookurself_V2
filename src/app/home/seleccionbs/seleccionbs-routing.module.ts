import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionbsPage } from './seleccionbs.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionbsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionbsPageRoutingModule {}

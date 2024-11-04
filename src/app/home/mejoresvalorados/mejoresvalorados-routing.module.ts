import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MejoresvaloradosPage } from './mejoresvalorados.page';

const routes: Routes = [
  {
    path: '',
    component: MejoresvaloradosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MejoresvaloradosPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorleerPage } from './porleer.page';

const routes: Routes = [
  {
    path: '',
    component: PorleerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorleerPageRoutingModule {}

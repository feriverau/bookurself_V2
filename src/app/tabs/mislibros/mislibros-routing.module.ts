import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MislibrosPage } from './mislibros.page';

const routes: Routes = [
  {
    path: '',
    component: MislibrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MislibrosPageRoutingModule {}

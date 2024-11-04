import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'masbuscados',
    loadChildren: () => import('./masbuscados/masbuscados.module').then( m => m.MasbuscadosPageModule)
  },
  {
    path: 'mejoresvalorados',
    loadChildren: () => import('./mejoresvalorados/mejoresvalorados.module').then( m => m.MejoresvaloradosPageModule)
  },
  {
    path: 'seleccionbs',
    loadChildren: () => import('./seleccionbs/seleccionbs.module').then( m => m.SeleccionbsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

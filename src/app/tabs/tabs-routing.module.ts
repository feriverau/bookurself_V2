import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    
    children:[
      {
        path: 'mislibros',
        loadChildren: () => import('../tabs/mislibros/mislibros.module').then( m => m.MislibrosPageModule)
      },
      {
        path: 'porleer',
        loadChildren: () => import('../tabs/porleer/porleer.module').then( m => m.PorleerPageModule)
      },
      
      {
        path: '',
        redirectTo: '/tabs/mislibros',
        pathMatch: 'full'
      }
    ]

  } 
   

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

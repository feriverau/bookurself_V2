import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionbsPageRoutingModule } from './seleccionbs-routing.module';

import { SeleccionbsPage } from './seleccionbs.page';
import { CompanyNameComponent } from 'src/app/company-name/company-name.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionbsPageRoutingModule,
    CompanyNameComponent
  ],
  declarations: [SeleccionbsPage]
})
export class SeleccionbsPageModule {}

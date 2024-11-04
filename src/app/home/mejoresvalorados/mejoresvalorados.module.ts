import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MejoresvaloradosPageRoutingModule } from './mejoresvalorados-routing.module';

import { MejoresvaloradosPage } from './mejoresvalorados.page';
import { CompanyNameComponent } from 'src/app/company-name/company-name.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MejoresvaloradosPageRoutingModule,
    CompanyNameComponent
  ],
  declarations: [MejoresvaloradosPage]
})
export class MejoresvaloradosPageModule {}

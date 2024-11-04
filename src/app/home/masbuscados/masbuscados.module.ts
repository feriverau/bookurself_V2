import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasbuscadosPageRoutingModule } from './masbuscados-routing.module';

import { MasbuscadosPage } from './masbuscados.page';
import { CompanyNameComponent } from 'src/app/company-name/company-name.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasbuscadosPageRoutingModule,
    CompanyNameComponent
   
  ],
  declarations: [MasbuscadosPage]
})
export class MasbuscadosPageModule {}

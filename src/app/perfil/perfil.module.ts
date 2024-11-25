import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';

import { CompanyNameComponent } from '../company-name/company-name.component';
import { FormatearFechaPipe } from '../pipes/formatear-fecha.pipe'; // Asegúrate de que la ruta sea correcta

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    CompanyNameComponent
  ],
  declarations: [PerfilPage, FormatearFechaPipe]
})
export class PerfilPageModule {}

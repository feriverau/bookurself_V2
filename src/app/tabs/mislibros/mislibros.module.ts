import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MislibrosPageRoutingModule } from './mislibros-routing.module';

import { MislibrosPage } from './mislibros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MislibrosPageRoutingModule
  ],
  declarations: [MislibrosPage]
})
export class MislibrosPageModule {}

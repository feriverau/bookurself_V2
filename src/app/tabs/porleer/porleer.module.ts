import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorleerPageRoutingModule } from './porleer-routing.module';

import { PorleerPage } from './porleer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorleerPageRoutingModule
  ],
  declarations: [PorleerPage]
})
export class PorleerPageModule {}

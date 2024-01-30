import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrywastePageRoutingModule } from './drywaste-routing.module';

import { DrywastePage } from './drywaste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrywastePageRoutingModule
  ],
  declarations: [DrywastePage]
})
export class DrywastePageModule {}

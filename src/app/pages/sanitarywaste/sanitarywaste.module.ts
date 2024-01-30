import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanitarywastePageRoutingModule } from './sanitarywaste-routing.module';

import { SanitarywastePage } from './sanitarywaste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanitarywastePageRoutingModule
  ],
  declarations: [SanitarywastePage]
})
export class SanitarywastePageModule {}

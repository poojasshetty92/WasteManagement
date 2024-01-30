import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WetwastePageRoutingModule } from './wetwaste-routing.module';

import { WetwastePage } from './wetwaste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WetwastePageRoutingModule
  ],
  declarations: [WetwastePage]
})
export class WetwastePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MixedwastePageRoutingModule } from './mixedwaste-routing.module';

import { MixedwastePage } from './mixedwaste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MixedwastePageRoutingModule
  ],
  declarations: [MixedwastePage]
})
export class MixedwastePageModule {}

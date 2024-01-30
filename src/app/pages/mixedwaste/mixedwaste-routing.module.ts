import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MixedwastePage } from './mixedwaste.page';

const routes: Routes = [
  {
    path: '',
    component: MixedwastePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MixedwastePageRoutingModule {}

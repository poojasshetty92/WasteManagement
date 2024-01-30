import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrywastePage } from './drywaste.page';

const routes: Routes = [
  {
    path: '',
    component: DrywastePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrywastePageRoutingModule {}

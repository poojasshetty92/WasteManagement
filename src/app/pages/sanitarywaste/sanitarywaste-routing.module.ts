import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanitarywastePage } from './sanitarywaste.page';

const routes: Routes = [
  {
    path: '',
    component: SanitarywastePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanitarywastePageRoutingModule {}

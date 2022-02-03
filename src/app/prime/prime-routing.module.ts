import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimePageComponent } from './prime-page/prime-page.component';

const routes: Routes = [
  {
    path: '',
    component: PrimePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimeRoutingModule { }

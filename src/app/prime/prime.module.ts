import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeRoutingModule } from './prime-routing.module';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbTooltipModule } from '@nebular/theme';
import { PrimePageComponent } from './prime-page/prime-page.component';


@NgModule({
  declarations: [
  
    PrimePageComponent
  ],
  imports: [
    CommonModule,
    PrimeRoutingModule,
    NbLayoutModule,
    NbIconModule,
    NbCardModule,
    NbButtonModule,
    NbTooltipModule,
  ]
})
export class PrimeModule { }

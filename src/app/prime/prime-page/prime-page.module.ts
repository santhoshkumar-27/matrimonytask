import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimePageRoutingModule } from './prime-page-routing.module';
import { PrimePageComponent } from './prime-page.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbTooltipModule } from '@nebular/theme';


@NgModule({
  declarations: [
    PrimePageComponent
  ],
  imports: [
    CommonModule,
    PrimePageRoutingModule,
    NbLayoutModule,
    NbIconModule,
    NbCardModule,
    NbButtonModule,
    NbTooltipModule,
  ]
})
export class PrimePageModule { }

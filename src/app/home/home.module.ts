import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbSpinnerModule, NbTooltipModule } from '@nebular/theme';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbLayoutModule,
    NbIconModule,
    NbCardModule,
    NbButtonModule,
    NbTooltipModule,
    HttpClientModule,
    NbSpinnerModule
  ]
})
export class HomeModule { }

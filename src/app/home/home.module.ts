import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbTooltipModule } from '@nebular/theme';
import { IndexComponent } from './index/index.component';


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
  ]
})
export class HomeModule { }

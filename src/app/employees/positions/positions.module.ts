import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionsRoutingModule } from './positions-routing.module';
import { PositionsView } from './views/positions/positions.view';


@NgModule({
  declarations: [
    PositionsView
  ],
  imports: [
    CommonModule,
    PositionsRoutingModule
  ]
})
export class PositionsModule { }

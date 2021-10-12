import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TariffsRoutingModule } from './tariffs-routing.module';
import { TariffsView } from './views/tariffs/tariffs.view';
import { ProductsAndTariffsCommonModule } from "../common/common.module";


@NgModule({
  declarations: [
    TariffsView
  ],
  imports: [
    CommonModule,
    TariffsRoutingModule,

    ProductsAndTariffsCommonModule
  ]
})
export class TariffsModule { }

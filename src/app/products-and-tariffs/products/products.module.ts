import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsAndTariffsCommonModule } from "../common/common.module";

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsView } from './views/products/products.view';


@NgModule({
  declarations: [
    ProductsView
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,

    ProductsAndTariffsCommonModule
  ]
})
export class ProductsModule { }

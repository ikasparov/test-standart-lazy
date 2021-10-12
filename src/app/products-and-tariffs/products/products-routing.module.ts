import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsView } from "./views/products/products.view";

const routes: Routes = [
  {
    path: '',
    component: ProductsView,
    data: {
      permission: ['asdasd', 'asasd']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

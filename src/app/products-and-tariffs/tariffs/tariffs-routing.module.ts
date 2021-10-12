import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TariffsView } from "./views/tariffs/tariffs.view";

const routes: Routes = [{
  path: '',
  component: TariffsView
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TariffsRoutingModule { }

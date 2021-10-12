import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PositionsView} from "./views/positions/positions.view";

const routes: Routes = [{
  path: '',
  component: PositionsView
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionsRoutingModule { }

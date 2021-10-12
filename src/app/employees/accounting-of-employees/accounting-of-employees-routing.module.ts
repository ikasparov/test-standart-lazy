import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountingOfEmployeesView } from "./views/accounting-of-employees/accounting-of-employees.view";

const routes: Routes = [{
  path: '',
  component: AccountingOfEmployeesView
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingOfEmployeesRoutingModule { }

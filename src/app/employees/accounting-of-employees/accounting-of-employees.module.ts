import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingOfEmployeesRoutingModule } from './accounting-of-employees-routing.module';
import { AccountingOfEmployeesView } from './views/accounting-of-employees/accounting-of-employees.view';


@NgModule({
  declarations: [
    AccountingOfEmployeesView
  ],
  imports: [
    CommonModule,
    AccountingOfEmployeesRoutingModule
  ]
})
export class AccountingOfEmployeesModule { }

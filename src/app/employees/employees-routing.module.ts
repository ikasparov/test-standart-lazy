import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'accounting-of-employees',
    loadChildren: () => import('./accounting-of-employees/accounting-of-employees.module').then(m => m.AccountingOfEmployeesModule)
  },
  {
    path: 'positions',
    loadChildren: () => import('./positions/positions.module').then(m => m.PositionsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }

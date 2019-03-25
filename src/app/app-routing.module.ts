import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionViewComponent } from './transaction-view/transaction-view.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { LoginComponent } from './login/login.component';
import {TransactionCreateEditComponent} from './transaction-create-edit/transaction-create-edit.component';

const routes: Routes = [
  {path:'view/:id', component: TransactionViewComponent },
  {path:'list', component: TransactionListComponent },
  {path:'create', component: TransactionCreateEditComponent },
  {path:'edit/:id', component: TransactionCreateEditComponent },
  {path:'edit', redirectTo: '/list', pathMatch: 'full' },
  {path:'', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

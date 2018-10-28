import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardAccountManagerService } from '../auth-guard-account-manager.service';



import { AccountManagerRootComponent } from './account-manager-root/account-manager-root.component';


const routes: Routes = [

  { path: 'gestio', component: AccountManagerRootComponent, canActivate: [AuthGuardAccountManagerService] }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountManagerRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ AuthGuardService } from'./../auth-guard.service';

//Components import
import { ListUsersComponent } from './list-users/list-users.component';
import { AdminRootComponent } from './admin-root/admin-root.component';


const routes: Routes = [
  { path: 'listusers', component: ListUsersComponent, canActivate: [AuthGuardService] },
  
  { path: 'admin', component: AdminRootComponent, canActivate: [AuthGuardService] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

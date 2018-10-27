import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ AuthGuardService } from'./../auth-guard.service';

//Components import
import { ListUsersComponent } from './list-users/list-users.component';
import { AdminRootComponent } from './admin-root/admin-root.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


const routes: Routes = [
  
  
  { path: 'admin', component: AdminRootComponent, canActivate: [AuthGuardService],
  children: [
    { path: 'listusers', component: ListUsersComponent, canActivate: [AuthGuardService] },
    { path: 'userDetail/:_id', component: UserDetailComponent, canActivate: [AuthGuardService] }
  ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

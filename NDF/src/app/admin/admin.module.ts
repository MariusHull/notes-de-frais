import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminRootComponent } from'./admin-root/admin-root.component';
import { ListUsersComponent } from'./list-users/list-users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminRootComponent,
    ListUsersComponent,
    UserDetailComponent
  ]
})
export class AdminModule { }

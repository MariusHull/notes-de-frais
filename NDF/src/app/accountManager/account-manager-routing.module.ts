import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardAccountManagerService } from '../auth-guard-account-manager.service';



import { AccountManagerRootComponent } from './account-manager-root/account-manager-root.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteHandleComponent } from './note-handle/note-handle.component';
import { ListUsersComponent } from './list-users/list-users.component';


const routes: Routes = [

  { path: 'gestio', component: AccountManagerRootComponent, canActivate: [AuthGuardAccountManagerService], 
children : [ 
  { path: ':_id/notes', component: NoteListComponent, canActivate: [AuthGuardAccountManagerService]},
  { path: ':_id/notes/:id', component: NoteHandleComponent, canActivate: [AuthGuardAccountManagerService]},
  { path: ':_id/listusers', component: ListUsersComponent, canActivate: [AuthGuardAccountManagerService]}
] }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountManagerRoutingModule { }

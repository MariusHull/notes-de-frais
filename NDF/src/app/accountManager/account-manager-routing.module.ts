import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardAccountManagerService } from '../auth-guard-account-manager.service';



import { AccountManagerRootComponent } from './account-manager-root/account-manager-root.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteHandleComponent } from './note-handle/note-handle.component';


const routes: Routes = [

  { path: 'gestio', component: AccountManagerRootComponent, canActivate: [AuthGuardAccountManagerService], 
children : [
  { path: 'notes', component: NoteListComponent, canActivate: [AuthGuardAccountManagerService]},
  { path: 'notes/:id', component: NoteHandleComponent, canActivate: [AuthGuardAccountManagerService]}
] }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountManagerRoutingModule { }

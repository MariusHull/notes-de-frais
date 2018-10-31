import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 


import { AccountManagerRoutingModule } from './account-manager-routing.module';
import { AccountManagerRootComponent } from './account-manager-root/account-manager-root.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteHandleComponent } from './note-handle/note-handle.component';
import { ListUsersComponent } from './list-users/list-users.component';

@NgModule({
  imports: [
    CommonModule,
    AccountManagerRoutingModule,
    FormsModule
  ],
  declarations: [
    AccountManagerRootComponent,
    NoteListComponent,
    NoteHandleComponent,
    ListUsersComponent
  ]
})
export class AccountManagerModule { }

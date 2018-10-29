import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountManagerRoutingModule } from './account-manager-routing.module';
import { AccountManagerRootComponent } from './account-manager-root/account-manager-root.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteHandleComponent } from './note-handle/note-handle.component';

@NgModule({
  imports: [
    CommonModule,
    AccountManagerRoutingModule
  ],
  declarations: [
    AccountManagerRootComponent,
    NoteListComponent,
    NoteHandleComponent
  ]
})
export class AccountManagerModule { }

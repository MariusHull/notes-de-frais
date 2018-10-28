import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountManagerRoutingModule } from './account-manager-routing.module';
import { AccountManagerRootComponent } from './account-manager-root/account-manager-root.component';

@NgModule({
  imports: [
    CommonModule,
    AccountManagerRoutingModule
  ],
  declarations: [
    AccountManagerRootComponent
  ]
})
export class AccountManagerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import { AuthGuardService } from './auth-guard.service';



//Import of the modules of the app
import { HomePageComponent } from './home-page/home-page.component';
import { ListNDFComponent } from './list-ndf/list-ndf.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { NouvelleNoteComponent } from './nouvelle-note/nouvelle-note.component';
import { NoteModifComponent } from './note-modif/note-modif.component';
import { LogPageComponent } from './log-page/log-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminRootComponent } from './admin-root/admin-root.component';
import { ListUsersComponent } from './list-users/list-users.component';





//Declaration of all the routes of the app
const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },

  { path: 'newn', component: NouvelleNoteComponent, canActivate: [AuthGuardService] },


  { path: 'login', component: LoginComponent },

  { path: 'profile', component: ProfileComponent },

  { path: 'admin', component: AdminRootComponent },

  { path: 'register', component: RegisterComponent },

  { path: 'listusers', component: ListUsersComponent },

  {
    path: 'list',
    component: ListNDFComponent,
    data: { title: 'Liste des Notes' }
  },


  { path: 'detail/:_id', 
  component: NoteDetailComponent },

  { path: 'modif/:_id', 
  component: NoteModifComponent },

  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  declarations: [],

  exports: [RouterModule]
})
export class AppRoutingModule { }

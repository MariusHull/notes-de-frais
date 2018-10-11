import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


//      /\
//     /  \
//    / || \
//   /  ||  \
//  /   ||   \
// /          \
// ------------
//Mock HTTP TO REMOVE : 
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { HomePageComponent } from './home-page/home-page.component';
import { ListNDFComponent } from './list-ndf/list-ndf.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NouvelleNoteComponent } from './nouvelle-note/nouvelle-note.component';
import { NoteModifComponent } from './note-modif/note-modif.component';
import { LogPageComponent } from './log-page/log-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },

  {
    path: 'list',
    component: ListNDFComponent,
    data: { title: 'Liste des Notes' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListNDFComponent,
    HomePageComponent,
    NotFoundComponent,
    NoteDetailComponent,
    NouvelleNoteComponent,
    NoteModifComponent,
    LogPageComponent,
    RegisterComponent,
    LoginComponent
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule, 
    HttpClientModule, 

//      /\
//     /  \
//    / || \
//   /  ||  \
//  /   ||   \
// /          \
// ------------
//Mock HTTP TO REMOVE : 
//    HttpClientInMemoryWebApiModule.forRoot(
//      InMemoryDataService, {dataEncapsulation: false}
//    )

  ],


  
  bootstrap: [AppComponent]
})
export class AppModule { }

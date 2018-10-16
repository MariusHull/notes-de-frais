import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { Location } from '@angular/common';
import { AuthentificationService, UserDetails } from '../authentification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  details: UserDetails;

  constructor(private noteService: NoteService,
    private location: Location,
    private auth: AuthentificationService) { }

    ngOnInit() { 
      this.details=this.auth.getUserDetails();  
      /*this.auth.profile().subscribe(user => {
        this.details = user;
      }, (err) => {
        console.error(err);
      });*/
    }

}

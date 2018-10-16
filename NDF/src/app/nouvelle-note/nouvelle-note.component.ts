import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { Location } from '@angular/common';
import { AuthentificationService, UserDetails } from '../authentification.service';

@Component({
  selector: 'app-nouvelle-note',
  templateUrl: './nouvelle-note.component.html',
  styleUrls: ['./nouvelle-note.component.css']
})
export class NouvelleNoteComponent implements OnInit {
  details: UserDetails;

  newNote: Note = {
    _id: undefined,
      title: "",
      amount: 0,
      currency: "",
      user: "", //this.details.name,
      moderator: "To Assign",
      date: "00-00-0000",
      status: "En cours de soumission",
      detail: ""
  };

  goBack(): void {
    this.location.back();
  }

  

  addNote(): void{
    this.newNote.user = this.details.name;
    this.noteService.addNote(this.newNote).subscribe(note => this.goBack());
    
    
  }


  constructor(private noteService: NoteService,
    private location: Location,
    private auth: AuthentificationService) { }

    ngOnInit() { 
      this.details=this.auth.getUserDetails(); 
    /*
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });
    */
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../note.service';
import { ActivatedRoute } from '@angular/router';
import { AuthentificationService, UserDetails } from '../authentification.service';


//Import of the mock NDF : 
//import { NOTES } from '../mock-notes';
import { Note } from '../note';
import { User } from '../user';


@Component({
  selector: 'app-list-ndf',
  templateUrl: './list-ndf.component.html',
  styleUrls: ['./list-ndf.component.css']
})
export class ListNDFComponent implements OnInit {
  details: UserDetails;
  notes: Note[];

  getNotesUser(userId: string): void {
    this.noteService.getNotesUser(userId)
    .subscribe(notes => this.notes= notes);
  }

  constructor(private noteService: NoteService,
    private route: ActivatedRoute,
    private auth: AuthentificationService){ }

  ngOnInit() {
    this.getNotesUser(this.route.snapshot.params.userId);
  }

}

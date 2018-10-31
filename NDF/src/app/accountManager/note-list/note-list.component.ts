import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../note.service';
import { ActivatedRoute } from '@angular/router';
import { AuthentificationService, UserDetails } from '../../authentification.service';
import { Location } from '@angular/common';
import { UserService } from '../../user.service';

import { Note } from '../../note';
import { User } from '../../user';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  details: UserDetails;
  notes: Note[];

  constructor(private noteService: NoteService,
    private route: ActivatedRoute,
    private auth: AuthentificationService) { }

  getNotesOfAccMan(accManId: string): void {
    this.noteService.getNotesOfAccMan(accManId)
    .subscribe(notes => this.notes=notes);

  }

  ngOnInit() {
    this.details = this.auth.getUserDetails();
    this.getNotesOfAccMan(this.details._id);
  }

}

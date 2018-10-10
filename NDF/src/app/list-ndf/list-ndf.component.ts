import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';


//Import of the mock NDF : 
//import { NOTES } from '../mock-notes';
import { Note } from '../note';


@Component({
  selector: 'app-list-ndf',
  templateUrl: './list-ndf.component.html',
  styleUrls: ['./list-ndf.component.css']
})
export class ListNDFComponent implements OnInit {
  notes: Note[];

  getNotes(): void {
    this.noteService.getNotes()
    .subscribe(notes => this.notes= notes);
  }

  constructor(private noteService: NoteService){ }

  ngOnInit() {
    this.getNotes();
  }

}
